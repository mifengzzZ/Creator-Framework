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
      "builtin-2d-gray-sprite",
      [
        {
          "hash": 4278481454,
          "record": null,
          "name": "builtin-2d-gray-sprite|vs|fs",
          "glsl3": {
            "vert": "\nprecision highp float;\nuniform CCGlobal {\n  mat4 cc_matView;\n  mat4 cc_matViewInv;\n  mat4 cc_matProj;\n  mat4 cc_matProjInv;\n  mat4 cc_matViewProj;\n  mat4 cc_matViewProjInv;\n  vec4 cc_cameraPos;\n  vec4 cc_time;\n  mediump vec4 cc_screenSize;\n  mediump vec4 cc_screenScale;\n};\nin vec3 a_position;\nin mediump vec2 a_uv0;\nout mediump vec2 v_uv0;\nin vec4 a_color;\nout vec4 v_color;\nvoid main () {\n  gl_Position = cc_matViewProj * vec4(a_position, 1);\n  v_uv0 = a_uv0;\n  v_color = a_color;\n}",
            "frag": "\nprecision highp float;\nuniform sampler2D texture;\nin mediump vec2 v_uv0;\nin vec4 v_color;\nvoid main () {\n  vec4 color = v_color;\n  vec4 texture_tmp = texture(texture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_texture\n      texture_tmp.a *= texture(texture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  #if INPUT_IS_GAMMA\n    color.rgb *= (texture_tmp.rgb * texture_tmp.rgb);\n    color.a *= texture_tmp.a;\n  #else\n    color *= texture_tmp;\n  #endif\n  float gray = 0.2126*color.r + 0.7152*color.g + 0.0722*color.b;\n  gl_FragColor = vec4(gray, gray, gray, color.a);\n}"
          },
          "glsl1": {
            "vert": "\nprecision highp float;\nuniform mat4 cc_matViewProj;\nattribute vec3 a_position;\nattribute mediump vec2 a_uv0;\nvarying mediump vec2 v_uv0;\nattribute vec4 a_color;\nvarying vec4 v_color;\nvoid main () {\n  gl_Position = cc_matViewProj * vec4(a_position, 1);\n  v_uv0 = a_uv0;\n  v_color = a_color;\n}",
            "frag": "\nprecision highp float;\nuniform sampler2D texture;\nvarying mediump vec2 v_uv0;\nvarying vec4 v_color;\nvoid main () {\n  vec4 color = v_color;\n  vec4 texture_tmp = texture2D(texture, v_uv0);\n  #if CC_USE_ALPHA_ATLAS_texture\n      texture_tmp.a *= texture2D(texture, v_uv0 + vec2(0, 0.5)).r;\n  #endif\n  #if INPUT_IS_GAMMA\n    color.rgb *= (texture_tmp.rgb * texture_tmp.rgb);\n    color.a *= texture_tmp.a;\n  #else\n    color *= texture_tmp;\n  #endif\n  float gray = 0.2126*color.r + 0.7152*color.g + 0.0722*color.b;\n  gl_FragColor = vec4(gray, gray, gray, color.a);\n}"
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
              "blocks": [],
              "samplers": []
            }
          },
          "defines": [
            {
              "name": "CC_USE_ALPHA_ATLAS_texture",
              "type": "boolean",
              "defines": []
            },
            {
              "name": "INPUT_IS_GAMMA",
              "type": "boolean",
              "defines": []
            }
          ],
          "blocks": [],
          "samplers": [
            {
              "name": "texture",
              "type": 29,
              "count": 1,
              "binding": 30,
              "defines": []
            }
          ]
        }
      ],
      [
        {
          "passes": [
            {
              "program": "builtin-2d-gray-sprite|vs|fs",
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