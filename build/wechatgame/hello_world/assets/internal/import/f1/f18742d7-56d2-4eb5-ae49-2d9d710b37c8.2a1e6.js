module.exports = [
  1,
  0,
  0,
  [
    [
      "cc.EffectAsset",
      [
        "_name",
        "shaders",
        "techniques"
      ],
      0
    ]
  ],
  [
    [
      0,
      0,
      1,
      2,
      4
    ]
  ],
  [
    [
      0,
      "builtin-2d-label",
      [
        {
          "hash": 1105459032,
          "record": null,
          "name": "builtin-2d-label|vs|fs",
          "glsl3": {
            "vert": "\nprecision highp float;\nuniform CCGlobal {\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n  vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_screenScale;\n};\nuniform CCLocal {\n  mat4 cc_matWorld;\n  mat4 cc_matWorldIT;\n};\nin vec3 a_position;\nin vec4 a_color;\nout vec4 v_color;\n#if USE_TEXTURE\nin vec2 a_uv0;\nout vec2 v_uv0;\n#endif\nvoid main () {\n  vec4 pos = vec4(a_position, 1);\n  #if CC_USE_MODEL\n  pos = cc_matViewProj * cc_matWorld * pos;\n  #else\n  pos = cc_matViewProj * pos;\n  #endif\n  #if USE_TEXTURE\n  v_uv0 = a_uv0;\n  #endif\n  v_color = a_color;\n  gl_Position = pos;\n}",
            "frag": "\n#if CC_SUPPORT_standard_derivatives\n  #extension GL_OES_standard_derivatives : enable\n#endif\nprecision highp float;\n#if USE_ALPHA_TEST\n  uniform ALPHA_TEST {\n    float alphaThreshold;\n  };\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nin vec4 v_color;\n#if USE_TEXTURE\nin vec2 v_uv0;\nuniform sampler2D texture;\n#endif\n#if USE_SDF\nuniform Outline {\n  vec4 outlineColor;\n  float outlineSize;\n};\n#endif\nvoid main () {\n#if USE_SDF\n  #if USE_TEXTURE_ALPHAONLY\n    float dist = texture(texture, v_uv0).a;\n  #else\n    float dist = texture(texture, v_uv0).r;\n  #endif\n  #if USE_SDF_EXTEND\n    const float EDGE_VALUE = 0.45;\n  #else\n    const float EDGE_VALUE = 0.5;\n  #endif\n  #if CC_SUPPORT_standard_derivatives\n    float smoothing = fwidth(dist);\n  #else\n    float smoothing = 0.05;\n  #endif\n  float outEdge = EDGE_VALUE - outlineSize;\n  float bg = smoothstep(outEdge - smoothing, outEdge, dist);\n  float fg = smoothstep(EDGE_VALUE - smoothing, EDGE_VALUE, dist);\n  vec4 fgColor = outlineColor * (1.0 - fg) + v_color * fg;\n  gl_FragColor = vec4(fgColor.rgb, fgColor.a * bg);\n#else\n  vec4 o = vec4(1, 1, 1, 1);\n  #if USE_TEXTURE\n    #if USE_TEXTURE_ALPHAONLY\n      o.a *= texture(texture, v_uv0).a;\n    #else\n      o *= texture(texture, v_uv0);\n    #endif\n    #if CC_USE_ALPHA_ATLAS_TEXTURE\n    o.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n    #endif\n  #endif\n  o *= v_color;\n  ALPHA_TEST(o);\n  gl_FragColor = o;\n#endif\n}"
          },
          "glsl1": {
            "vert": "\nprecision highp float;\nuniform mat4 cc_matViewProj;\nuniform mat4 cc_matWorld;\nattribute vec3 a_position;\nattribute vec4 a_color;\nvarying vec4 v_color;\n#if USE_TEXTURE\nattribute vec2 a_uv0;\nvarying vec2 v_uv0;\n#endif\nvoid main () {\n  vec4 pos = vec4(a_position, 1);\n  #if CC_USE_MODEL\n  pos = cc_matViewProj * cc_matWorld * pos;\n  #else\n  pos = cc_matViewProj * pos;\n  #endif\n  #if USE_TEXTURE\n  v_uv0 = a_uv0;\n  #endif\n  v_color = a_color;\n  gl_Position = pos;\n}",
            "frag": "\n#if CC_SUPPORT_standard_derivatives\n  #extension GL_OES_standard_derivatives : enable\n#endif\nprecision highp float;\n#if USE_ALPHA_TEST\n  uniform float alphaThreshold;\n#endif\nvoid ALPHA_TEST (in vec4 color) {\n  #if USE_ALPHA_TEST\n      if (color.a < alphaThreshold) discard;\n  #endif\n}\nvoid ALPHA_TEST (in float alpha) {\n  #if USE_ALPHA_TEST\n      if (alpha < alphaThreshold) discard;\n  #endif\n}\nvarying vec4 v_color;\n#if USE_TEXTURE\nvarying vec2 v_uv0;\nuniform sampler2D texture;\n#endif\n#if USE_SDF\nuniform vec4 outlineColor;\nuniform float outlineSize;\n#endif\nvoid main () {\n#if USE_SDF\n  #if USE_TEXTURE_ALPHAONLY\n    float dist = texture2D(texture, v_uv0).a;\n  #else\n    float dist = texture2D(texture, v_uv0).r;\n  #endif\n  #if USE_SDF_EXTEND\n    const float EDGE_VALUE = 0.45;\n  #else\n    const float EDGE_VALUE = 0.5;\n  #endif\n  #if CC_SUPPORT_standard_derivatives\n    float smoothing = fwidth(dist);\n  #else\n    float smoothing = 0.05;\n  #endif\n  float outEdge = EDGE_VALUE - outlineSize;\n  float bg = smoothstep(outEdge - smoothing, outEdge, dist);\n  float fg = smoothstep(EDGE_VALUE - smoothing, EDGE_VALUE, dist);\n  vec4 fgColor = outlineColor * (1.0 - fg) + v_color * fg;\n  gl_FragColor = vec4(fgColor.rgb, fgColor.a * bg);\n#else\n  vec4 o = vec4(1, 1, 1, 1);\n  #if USE_TEXTURE\n    #if USE_TEXTURE_ALPHAONLY\n      o.a *= texture2D(texture, v_uv0).a;\n    #else\n      o *= texture2D(texture, v_uv0);\n    #endif\n    #if CC_USE_ALPHA_ATLAS_TEXTURE\n    o.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n    #endif\n  #endif\n  o *= v_color;\n  ALPHA_TEST(o);\n  gl_FragColor = o;\n#endif\n}"
          },
          "builtins": {
            "globals": {
              "blocks": [
                {
                  "name": "CCGlobal",
                  "defines": []
                }
              ],
              "samplers": []
            },
            "locals": {
              "blocks": [
                {
                  "name": "CCLocal",
                  "defines": []
                }
              ],
              "samplers": []
            }
          },
          "defines": [
            {
              "name": "USE_TEXTURE",
              "type": "boolean",
              "defines": []
            },
            {
              "name": "CC_USE_MODEL",
              "type": "boolean",
              "defines": []
            },
            {
              "name": "CC_SUPPORT_standard_derivatives",
              "type": "boolean",
              "defines": []
            },
            {
              "name": "USE_ALPHA_TEST",
              "type": "boolean",
              "defines": []
            },
            {
              "name": "USE_SDF",
              "type": "boolean",
              "defines": []
            },
            {
              "name": "USE_TEXTURE_ALPHAONLY",
              "type": "boolean",
              "defines": [
                "USE_SDF"
              ]
            },
            {
              "name": "USE_SDF_EXTEND",
              "type": "boolean",
              "defines": [
                "USE_SDF"
              ]
            },
            {
              "name": "CC_USE_ALPHA_ATLAS_TEXTURE",
              "type": "boolean",
              "defines": [
                "USE_TEXTURE"
              ]
            }
          ],
          "blocks": [
            {
              "name": "ALPHA_TEST",
              "binding": 0,
              "members": [
                {
                  "name": "alphaThreshold",
                  "type": 13,
                  "count": 1
                }
              ],
              "defines": [
                "USE_ALPHA_TEST"
              ]
            },
            {
              "name": "Outline",
              "binding": 1,
              "members": [
                {
                  "name": "outlineColor",
                  "type": 16,
                  "count": 1
                },
                {
                  "name": "outlineSize",
                  "type": 13,
                  "count": 1
                }
              ],
              "defines": [
                "USE_SDF"
              ]
            }
          ],
          "samplers": [
            {
              "name": "texture",
              "type": 29,
              "count": 1,
              "binding": 30,
              "defines": [
                "USE_TEXTURE"
              ]
            }
          ]
        }
      ],
      [
        {
          "passes": [
            {
              "program": "builtin-2d-label|vs|fs",
              "blendState": {
                "targets": [
                  {
                    "blend": true
                  }
                ]
              },
              "rasterizerState": {
                "cullMode": 0
              },
              "properties": {
                "texture": {
                  "value": "white",
                  "type": 29
                },
                "alphaThreshold": {
                  "type": 13,
                  "value": [
                    0.5
                  ]
                },
                "outlineSize": {
                  "type": 13,
                  "value": [
                    0
                  ]
                },
                "outlineColor": {
                  "type": 16,
                  "value": [
                    1,
                    1,
                    1,
                    1
                  ]
                }
              }
            }
          ]
        }
      ]
    ]
  ],
  0,
  0,
  [],
  [],
  []
];