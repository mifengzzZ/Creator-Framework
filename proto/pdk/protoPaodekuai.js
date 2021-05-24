/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.protoPaodekuai = (function() {

    /**
     * Namespace protoPaodekuai.
     * @exports protoPaodekuai
     * @namespace
     */
    var protoPaodekuai = {};

    protoPaodekuai.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof protoPaodekuai
         * @interface IPlayer
         * @property {number|null} [seat] Player seat
         * @property {string|null} [player] Player player
         * @property {string|null} [info] Player info
         * @property {number|null} [readyState] Player readyState
         * @property {number|null} [isOnline] Player isOnline
         * @property {number|null} [score] Player score
         * @property {number|null} [isBaodan] Player isBaodan
         * @property {number|null} [cardsLen] Player cardsLen
         */

        /**
         * Constructs a new Player.
         * @memberof protoPaodekuai
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {protoPaodekuai.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player seat.
         * @member {number} seat
         * @memberof protoPaodekuai.Player
         * @instance
         */
        Player.prototype.seat = 0;

        /**
         * Player player.
         * @member {string} player
         * @memberof protoPaodekuai.Player
         * @instance
         */
        Player.prototype.player = "";

        /**
         * Player info.
         * @member {string} info
         * @memberof protoPaodekuai.Player
         * @instance
         */
        Player.prototype.info = "";

        /**
         * Player readyState.
         * @member {number} readyState
         * @memberof protoPaodekuai.Player
         * @instance
         */
        Player.prototype.readyState = 0;

        /**
         * Player isOnline.
         * @member {number} isOnline
         * @memberof protoPaodekuai.Player
         * @instance
         */
        Player.prototype.isOnline = 0;

        /**
         * Player score.
         * @member {number} score
         * @memberof protoPaodekuai.Player
         * @instance
         */
        Player.prototype.score = 0;

        /**
         * Player isBaodan.
         * @member {number} isBaodan
         * @memberof protoPaodekuai.Player
         * @instance
         */
        Player.prototype.isBaodan = 0;

        /**
         * Player cardsLen.
         * @member {number} cardsLen
         * @memberof protoPaodekuai.Player
         * @instance
         */
        Player.prototype.cardsLen = 0;

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.Player
         * @static
         * @param {protoPaodekuai.IPlayer=} [properties] Properties to set
         * @returns {protoPaodekuai.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link protoPaodekuai.Player.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.Player
         * @static
         * @param {protoPaodekuai.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seat != null && Object.hasOwnProperty.call(message, "seat"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seat);
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.player);
            if (message.info != null && Object.hasOwnProperty.call(message, "info"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.info);
            if (message.readyState != null && Object.hasOwnProperty.call(message, "readyState"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.readyState);
            if (message.isOnline != null && Object.hasOwnProperty.call(message, "isOnline"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.isOnline);
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.score);
            if (message.isBaodan != null && Object.hasOwnProperty.call(message, "isBaodan"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.isBaodan);
            if (message.cardsLen != null && Object.hasOwnProperty.call(message, "cardsLen"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.cardsLen);
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link protoPaodekuai.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.Player
         * @static
         * @param {protoPaodekuai.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.Player();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seat = reader.int32();
                    break;
                case 2:
                    message.player = reader.string();
                    break;
                case 3:
                    message.info = reader.string();
                    break;
                case 4:
                    message.readyState = reader.int32();
                    break;
                case 5:
                    message.isOnline = reader.int32();
                    break;
                case 6:
                    message.score = reader.int32();
                    break;
                case 7:
                    message.isBaodan = reader.int32();
                    break;
                case 8:
                    message.cardsLen = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof protoPaodekuai.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seat != null && message.hasOwnProperty("seat"))
                if (!$util.isInteger(message.seat))
                    return "seat: integer expected";
            if (message.player != null && message.hasOwnProperty("player"))
                if (!$util.isString(message.player))
                    return "player: string expected";
            if (message.info != null && message.hasOwnProperty("info"))
                if (!$util.isString(message.info))
                    return "info: string expected";
            if (message.readyState != null && message.hasOwnProperty("readyState"))
                if (!$util.isInteger(message.readyState))
                    return "readyState: integer expected";
            if (message.isOnline != null && message.hasOwnProperty("isOnline"))
                if (!$util.isInteger(message.isOnline))
                    return "isOnline: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            if (message.isBaodan != null && message.hasOwnProperty("isBaodan"))
                if (!$util.isInteger(message.isBaodan))
                    return "isBaodan: integer expected";
            if (message.cardsLen != null && message.hasOwnProperty("cardsLen"))
                if (!$util.isInteger(message.cardsLen))
                    return "cardsLen: integer expected";
            return null;
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.Player} Player
         */
        Player.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.Player)
                return object;
            var message = new $root.protoPaodekuai.Player();
            if (object.seat != null)
                message.seat = object.seat | 0;
            if (object.player != null)
                message.player = String(object.player);
            if (object.info != null)
                message.info = String(object.info);
            if (object.readyState != null)
                message.readyState = object.readyState | 0;
            if (object.isOnline != null)
                message.isOnline = object.isOnline | 0;
            if (object.score != null)
                message.score = object.score | 0;
            if (object.isBaodan != null)
                message.isBaodan = object.isBaodan | 0;
            if (object.cardsLen != null)
                message.cardsLen = object.cardsLen | 0;
            return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.Player
         * @static
         * @param {protoPaodekuai.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.seat = 0;
                object.player = "";
                object.info = "";
                object.readyState = 0;
                object.isOnline = 0;
                object.score = 0;
                object.isBaodan = 0;
                object.cardsLen = 0;
            }
            if (message.seat != null && message.hasOwnProperty("seat"))
                object.seat = message.seat;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = message.player;
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = message.info;
            if (message.readyState != null && message.hasOwnProperty("readyState"))
                object.readyState = message.readyState;
            if (message.isOnline != null && message.hasOwnProperty("isOnline"))
                object.isOnline = message.isOnline;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            if (message.isBaodan != null && message.hasOwnProperty("isBaodan"))
                object.isBaodan = message.isBaodan;
            if (message.cardsLen != null && message.hasOwnProperty("cardsLen"))
                object.cardsLen = message.cardsLen;
            return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Player;
    })();

    protoPaodekuai.EnterRoomRequest = (function() {

        /**
         * Properties of an EnterRoomRequest.
         * @memberof protoPaodekuai
         * @interface IEnterRoomRequest
         * @property {number|null} [roomId] EnterRoomRequest roomId
         * @property {string|null} [player] EnterRoomRequest player
         * @property {string|null} [info] EnterRoomRequest info
         */

        /**
         * Constructs a new EnterRoomRequest.
         * @memberof protoPaodekuai
         * @classdesc Represents an EnterRoomRequest.
         * @implements IEnterRoomRequest
         * @constructor
         * @param {protoPaodekuai.IEnterRoomRequest=} [properties] Properties to set
         */
        function EnterRoomRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomRequest roomId.
         * @member {number} roomId
         * @memberof protoPaodekuai.EnterRoomRequest
         * @instance
         */
        EnterRoomRequest.prototype.roomId = 0;

        /**
         * EnterRoomRequest player.
         * @member {string} player
         * @memberof protoPaodekuai.EnterRoomRequest
         * @instance
         */
        EnterRoomRequest.prototype.player = "";

        /**
         * EnterRoomRequest info.
         * @member {string} info
         * @memberof protoPaodekuai.EnterRoomRequest
         * @instance
         */
        EnterRoomRequest.prototype.info = "";

        /**
         * Creates a new EnterRoomRequest instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.EnterRoomRequest
         * @static
         * @param {protoPaodekuai.IEnterRoomRequest=} [properties] Properties to set
         * @returns {protoPaodekuai.EnterRoomRequest} EnterRoomRequest instance
         */
        EnterRoomRequest.create = function create(properties) {
            return new EnterRoomRequest(properties);
        };

        /**
         * Encodes the specified EnterRoomRequest message. Does not implicitly {@link protoPaodekuai.EnterRoomRequest.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.EnterRoomRequest
         * @static
         * @param {protoPaodekuai.IEnterRoomRequest} message EnterRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.roomId);
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.player);
            if (message.info != null && Object.hasOwnProperty.call(message, "info"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.info);
            return writer;
        };

        /**
         * Encodes the specified EnterRoomRequest message, length delimited. Does not implicitly {@link protoPaodekuai.EnterRoomRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.EnterRoomRequest
         * @static
         * @param {protoPaodekuai.IEnterRoomRequest} message EnterRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.EnterRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.EnterRoomRequest} EnterRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.EnterRoomRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.uint32();
                    break;
                case 3:
                    message.player = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.EnterRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.EnterRoomRequest} EnterRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomRequest message.
         * @function verify
         * @memberof protoPaodekuai.EnterRoomRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            if (message.player != null && message.hasOwnProperty("player"))
                if (!$util.isString(message.player))
                    return "player: string expected";
            if (message.info != null && message.hasOwnProperty("info"))
                if (!$util.isString(message.info))
                    return "info: string expected";
            return null;
        };

        /**
         * Creates an EnterRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.EnterRoomRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.EnterRoomRequest} EnterRoomRequest
         */
        EnterRoomRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.EnterRoomRequest)
                return object;
            var message = new $root.protoPaodekuai.EnterRoomRequest();
            if (object.roomId != null)
                message.roomId = object.roomId >>> 0;
            if (object.player != null)
                message.player = String(object.player);
            if (object.info != null)
                message.info = String(object.info);
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.EnterRoomRequest
         * @static
         * @param {protoPaodekuai.EnterRoomRequest} message EnterRoomRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomId = 0;
                object.player = "";
                object.info = "";
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = message.player;
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = message.info;
            return object;
        };

        /**
         * Converts this EnterRoomRequest to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.EnterRoomRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomRequest;
    })();

    protoPaodekuai.EnterRoomResponse = (function() {

        /**
         * Properties of an EnterRoomResponse.
         * @memberof protoPaodekuai
         * @interface IEnterRoomResponse
         * @property {number|null} [code] EnterRoomResponse code
         * @property {number|null} [roomId] EnterRoomResponse roomId
         * @property {string|null} [roomKwargs] EnterRoomResponse roomKwargs
         * @property {string|null} [roomOwner] EnterRoomResponse roomOwner
         * @property {string|null} [roomOwnerInfo] EnterRoomResponse roomOwnerInfo
         * @property {number|null} [roomState] EnterRoomResponse roomState
         * @property {number|null} [gameRolls] EnterRoomResponse gameRolls
         * @property {Array.<protoPaodekuai.IPlayer>|null} [player] EnterRoomResponse player
         */

        /**
         * Constructs a new EnterRoomResponse.
         * @memberof protoPaodekuai
         * @classdesc Represents an EnterRoomResponse.
         * @implements IEnterRoomResponse
         * @constructor
         * @param {protoPaodekuai.IEnterRoomResponse=} [properties] Properties to set
         */
        function EnterRoomResponse(properties) {
            this.player = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomResponse code.
         * @member {number} code
         * @memberof protoPaodekuai.EnterRoomResponse
         * @instance
         */
        EnterRoomResponse.prototype.code = 0;

        /**
         * EnterRoomResponse roomId.
         * @member {number} roomId
         * @memberof protoPaodekuai.EnterRoomResponse
         * @instance
         */
        EnterRoomResponse.prototype.roomId = 0;

        /**
         * EnterRoomResponse roomKwargs.
         * @member {string} roomKwargs
         * @memberof protoPaodekuai.EnterRoomResponse
         * @instance
         */
        EnterRoomResponse.prototype.roomKwargs = "";

        /**
         * EnterRoomResponse roomOwner.
         * @member {string} roomOwner
         * @memberof protoPaodekuai.EnterRoomResponse
         * @instance
         */
        EnterRoomResponse.prototype.roomOwner = "";

        /**
         * EnterRoomResponse roomOwnerInfo.
         * @member {string} roomOwnerInfo
         * @memberof protoPaodekuai.EnterRoomResponse
         * @instance
         */
        EnterRoomResponse.prototype.roomOwnerInfo = "";

        /**
         * EnterRoomResponse roomState.
         * @member {number} roomState
         * @memberof protoPaodekuai.EnterRoomResponse
         * @instance
         */
        EnterRoomResponse.prototype.roomState = 0;

        /**
         * EnterRoomResponse gameRolls.
         * @member {number} gameRolls
         * @memberof protoPaodekuai.EnterRoomResponse
         * @instance
         */
        EnterRoomResponse.prototype.gameRolls = 0;

        /**
         * EnterRoomResponse player.
         * @member {Array.<protoPaodekuai.IPlayer>} player
         * @memberof protoPaodekuai.EnterRoomResponse
         * @instance
         */
        EnterRoomResponse.prototype.player = $util.emptyArray;

        /**
         * Creates a new EnterRoomResponse instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.EnterRoomResponse
         * @static
         * @param {protoPaodekuai.IEnterRoomResponse=} [properties] Properties to set
         * @returns {protoPaodekuai.EnterRoomResponse} EnterRoomResponse instance
         */
        EnterRoomResponse.create = function create(properties) {
            return new EnterRoomResponse(properties);
        };

        /**
         * Encodes the specified EnterRoomResponse message. Does not implicitly {@link protoPaodekuai.EnterRoomResponse.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.EnterRoomResponse
         * @static
         * @param {protoPaodekuai.IEnterRoomResponse} message EnterRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.roomId);
            if (message.roomKwargs != null && Object.hasOwnProperty.call(message, "roomKwargs"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.roomKwargs);
            if (message.roomOwner != null && Object.hasOwnProperty.call(message, "roomOwner"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.roomOwner);
            if (message.roomOwnerInfo != null && Object.hasOwnProperty.call(message, "roomOwnerInfo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.roomOwnerInfo);
            if (message.roomState != null && Object.hasOwnProperty.call(message, "roomState"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.roomState);
            if (message.gameRolls != null && Object.hasOwnProperty.call(message, "gameRolls"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.gameRolls);
            if (message.player != null && message.player.length)
                for (var i = 0; i < message.player.length; ++i)
                    $root.protoPaodekuai.Player.encode(message.player[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EnterRoomResponse message, length delimited. Does not implicitly {@link protoPaodekuai.EnterRoomResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.EnterRoomResponse
         * @static
         * @param {protoPaodekuai.IEnterRoomResponse} message EnterRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.EnterRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.EnterRoomResponse} EnterRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.EnterRoomResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.roomId = reader.uint32();
                    break;
                case 3:
                    message.roomKwargs = reader.string();
                    break;
                case 4:
                    message.roomOwner = reader.string();
                    break;
                case 5:
                    message.roomOwnerInfo = reader.string();
                    break;
                case 6:
                    message.roomState = reader.int32();
                    break;
                case 7:
                    message.gameRolls = reader.int32();
                    break;
                case 8:
                    if (!(message.player && message.player.length))
                        message.player = [];
                    message.player.push($root.protoPaodekuai.Player.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.EnterRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.EnterRoomResponse} EnterRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomResponse message.
         * @function verify
         * @memberof protoPaodekuai.EnterRoomResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            if (message.roomKwargs != null && message.hasOwnProperty("roomKwargs"))
                if (!$util.isString(message.roomKwargs))
                    return "roomKwargs: string expected";
            if (message.roomOwner != null && message.hasOwnProperty("roomOwner"))
                if (!$util.isString(message.roomOwner))
                    return "roomOwner: string expected";
            if (message.roomOwnerInfo != null && message.hasOwnProperty("roomOwnerInfo"))
                if (!$util.isString(message.roomOwnerInfo))
                    return "roomOwnerInfo: string expected";
            if (message.roomState != null && message.hasOwnProperty("roomState"))
                if (!$util.isInteger(message.roomState))
                    return "roomState: integer expected";
            if (message.gameRolls != null && message.hasOwnProperty("gameRolls"))
                if (!$util.isInteger(message.gameRolls))
                    return "gameRolls: integer expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                if (!Array.isArray(message.player))
                    return "player: array expected";
                for (var i = 0; i < message.player.length; ++i) {
                    var error = $root.protoPaodekuai.Player.verify(message.player[i]);
                    if (error)
                        return "player." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EnterRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.EnterRoomResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.EnterRoomResponse} EnterRoomResponse
         */
        EnterRoomResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.EnterRoomResponse)
                return object;
            var message = new $root.protoPaodekuai.EnterRoomResponse();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.roomId != null)
                message.roomId = object.roomId >>> 0;
            if (object.roomKwargs != null)
                message.roomKwargs = String(object.roomKwargs);
            if (object.roomOwner != null)
                message.roomOwner = String(object.roomOwner);
            if (object.roomOwnerInfo != null)
                message.roomOwnerInfo = String(object.roomOwnerInfo);
            if (object.roomState != null)
                message.roomState = object.roomState | 0;
            if (object.gameRolls != null)
                message.gameRolls = object.gameRolls | 0;
            if (object.player) {
                if (!Array.isArray(object.player))
                    throw TypeError(".protoPaodekuai.EnterRoomResponse.player: array expected");
                message.player = [];
                for (var i = 0; i < object.player.length; ++i) {
                    if (typeof object.player[i] !== "object")
                        throw TypeError(".protoPaodekuai.EnterRoomResponse.player: object expected");
                    message.player[i] = $root.protoPaodekuai.Player.fromObject(object.player[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.EnterRoomResponse
         * @static
         * @param {protoPaodekuai.EnterRoomResponse} message EnterRoomResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.player = [];
            if (options.defaults) {
                object.code = 0;
                object.roomId = 0;
                object.roomKwargs = "";
                object.roomOwner = "";
                object.roomOwnerInfo = "";
                object.roomState = 0;
                object.gameRolls = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.roomKwargs != null && message.hasOwnProperty("roomKwargs"))
                object.roomKwargs = message.roomKwargs;
            if (message.roomOwner != null && message.hasOwnProperty("roomOwner"))
                object.roomOwner = message.roomOwner;
            if (message.roomOwnerInfo != null && message.hasOwnProperty("roomOwnerInfo"))
                object.roomOwnerInfo = message.roomOwnerInfo;
            if (message.roomState != null && message.hasOwnProperty("roomState"))
                object.roomState = message.roomState;
            if (message.gameRolls != null && message.hasOwnProperty("gameRolls"))
                object.gameRolls = message.gameRolls;
            if (message.player && message.player.length) {
                object.player = [];
                for (var j = 0; j < message.player.length; ++j)
                    object.player[j] = $root.protoPaodekuai.Player.toObject(message.player[j], options);
            }
            return object;
        };

        /**
         * Converts this EnterRoomResponse to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.EnterRoomResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomResponse;
    })();

    protoPaodekuai.EnterRoomOtherResponse = (function() {

        /**
         * Properties of an EnterRoomOtherResponse.
         * @memberof protoPaodekuai
         * @interface IEnterRoomOtherResponse
         * @property {number|null} [code] EnterRoomOtherResponse code
         * @property {protoPaodekuai.IPlayer|null} [player] EnterRoomOtherResponse player
         */

        /**
         * Constructs a new EnterRoomOtherResponse.
         * @memberof protoPaodekuai
         * @classdesc Represents an EnterRoomOtherResponse.
         * @implements IEnterRoomOtherResponse
         * @constructor
         * @param {protoPaodekuai.IEnterRoomOtherResponse=} [properties] Properties to set
         */
        function EnterRoomOtherResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomOtherResponse code.
         * @member {number} code
         * @memberof protoPaodekuai.EnterRoomOtherResponse
         * @instance
         */
        EnterRoomOtherResponse.prototype.code = 0;

        /**
         * EnterRoomOtherResponse player.
         * @member {protoPaodekuai.IPlayer|null|undefined} player
         * @memberof protoPaodekuai.EnterRoomOtherResponse
         * @instance
         */
        EnterRoomOtherResponse.prototype.player = null;

        /**
         * Creates a new EnterRoomOtherResponse instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.EnterRoomOtherResponse
         * @static
         * @param {protoPaodekuai.IEnterRoomOtherResponse=} [properties] Properties to set
         * @returns {protoPaodekuai.EnterRoomOtherResponse} EnterRoomOtherResponse instance
         */
        EnterRoomOtherResponse.create = function create(properties) {
            return new EnterRoomOtherResponse(properties);
        };

        /**
         * Encodes the specified EnterRoomOtherResponse message. Does not implicitly {@link protoPaodekuai.EnterRoomOtherResponse.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.EnterRoomOtherResponse
         * @static
         * @param {protoPaodekuai.IEnterRoomOtherResponse} message EnterRoomOtherResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomOtherResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                $root.protoPaodekuai.Player.encode(message.player, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EnterRoomOtherResponse message, length delimited. Does not implicitly {@link protoPaodekuai.EnterRoomOtherResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.EnterRoomOtherResponse
         * @static
         * @param {protoPaodekuai.IEnterRoomOtherResponse} message EnterRoomOtherResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomOtherResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomOtherResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.EnterRoomOtherResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.EnterRoomOtherResponse} EnterRoomOtherResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomOtherResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.EnterRoomOtherResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.player = $root.protoPaodekuai.Player.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomOtherResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.EnterRoomOtherResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.EnterRoomOtherResponse} EnterRoomOtherResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomOtherResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomOtherResponse message.
         * @function verify
         * @memberof protoPaodekuai.EnterRoomOtherResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomOtherResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.protoPaodekuai.Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            return null;
        };

        /**
         * Creates an EnterRoomOtherResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.EnterRoomOtherResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.EnterRoomOtherResponse} EnterRoomOtherResponse
         */
        EnterRoomOtherResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.EnterRoomOtherResponse)
                return object;
            var message = new $root.protoPaodekuai.EnterRoomOtherResponse();
            if (object.code != null)
                message.code = object.code >>> 0;
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".protoPaodekuai.EnterRoomOtherResponse.player: object expected");
                message.player = $root.protoPaodekuai.Player.fromObject(object.player);
            }
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomOtherResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.EnterRoomOtherResponse
         * @static
         * @param {protoPaodekuai.EnterRoomOtherResponse} message EnterRoomOtherResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomOtherResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.player = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.protoPaodekuai.Player.toObject(message.player, options);
            return object;
        };

        /**
         * Converts this EnterRoomOtherResponse to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.EnterRoomOtherResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomOtherResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomOtherResponse;
    })();

    protoPaodekuai.OnlineStatusResponse = (function() {

        /**
         * Properties of an OnlineStatusResponse.
         * @memberof protoPaodekuai
         * @interface IOnlineStatusResponse
         * @property {string|null} [player] OnlineStatusResponse player
         * @property {boolean|null} [status] OnlineStatusResponse status
         */

        /**
         * Constructs a new OnlineStatusResponse.
         * @memberof protoPaodekuai
         * @classdesc Represents an OnlineStatusResponse.
         * @implements IOnlineStatusResponse
         * @constructor
         * @param {protoPaodekuai.IOnlineStatusResponse=} [properties] Properties to set
         */
        function OnlineStatusResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OnlineStatusResponse player.
         * @member {string} player
         * @memberof protoPaodekuai.OnlineStatusResponse
         * @instance
         */
        OnlineStatusResponse.prototype.player = "";

        /**
         * OnlineStatusResponse status.
         * @member {boolean} status
         * @memberof protoPaodekuai.OnlineStatusResponse
         * @instance
         */
        OnlineStatusResponse.prototype.status = false;

        /**
         * Creates a new OnlineStatusResponse instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.OnlineStatusResponse
         * @static
         * @param {protoPaodekuai.IOnlineStatusResponse=} [properties] Properties to set
         * @returns {protoPaodekuai.OnlineStatusResponse} OnlineStatusResponse instance
         */
        OnlineStatusResponse.create = function create(properties) {
            return new OnlineStatusResponse(properties);
        };

        /**
         * Encodes the specified OnlineStatusResponse message. Does not implicitly {@link protoPaodekuai.OnlineStatusResponse.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.OnlineStatusResponse
         * @static
         * @param {protoPaodekuai.IOnlineStatusResponse} message OnlineStatusResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnlineStatusResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.player);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.status);
            return writer;
        };

        /**
         * Encodes the specified OnlineStatusResponse message, length delimited. Does not implicitly {@link protoPaodekuai.OnlineStatusResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.OnlineStatusResponse
         * @static
         * @param {protoPaodekuai.IOnlineStatusResponse} message OnlineStatusResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnlineStatusResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnlineStatusResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.OnlineStatusResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.OnlineStatusResponse} OnlineStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnlineStatusResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.OnlineStatusResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player = reader.string();
                    break;
                case 2:
                    message.status = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OnlineStatusResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.OnlineStatusResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.OnlineStatusResponse} OnlineStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnlineStatusResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnlineStatusResponse message.
         * @function verify
         * @memberof protoPaodekuai.OnlineStatusResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnlineStatusResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player"))
                if (!$util.isString(message.player))
                    return "player: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (typeof message.status !== "boolean")
                    return "status: boolean expected";
            return null;
        };

        /**
         * Creates an OnlineStatusResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.OnlineStatusResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.OnlineStatusResponse} OnlineStatusResponse
         */
        OnlineStatusResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.OnlineStatusResponse)
                return object;
            var message = new $root.protoPaodekuai.OnlineStatusResponse();
            if (object.player != null)
                message.player = String(object.player);
            if (object.status != null)
                message.status = Boolean(object.status);
            return message;
        };

        /**
         * Creates a plain object from an OnlineStatusResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.OnlineStatusResponse
         * @static
         * @param {protoPaodekuai.OnlineStatusResponse} message OnlineStatusResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnlineStatusResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.player = "";
                object.status = false;
            }
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = message.player;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this OnlineStatusResponse to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.OnlineStatusResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnlineStatusResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OnlineStatusResponse;
    })();

    protoPaodekuai.ReconnectResponse = (function() {

        /**
         * Properties of a ReconnectResponse.
         * @memberof protoPaodekuai
         * @interface IReconnectResponse
         * @property {Array.<number>|null} [pCards] ReconnectResponse pCards
         * @property {number|null} [isOpen] ReconnectResponse isOpen
         * @property {string|null} [tableUuid] ReconnectResponse tableUuid
         * @property {Array.<number>|null} [tableCards] ReconnectResponse tableCards
         * @property {string|null} [tableCardType] ReconnectResponse tableCardType
         * @property {number|null} [code] ReconnectResponse code
         * @property {number|null} [roomId] ReconnectResponse roomId
         * @property {string|null} [roomKwargs] ReconnectResponse roomKwargs
         * @property {string|null} [roomOwner] ReconnectResponse roomOwner
         * @property {string|null} [roomOwnerInfo] ReconnectResponse roomOwnerInfo
         * @property {number|null} [roomState] ReconnectResponse roomState
         * @property {number|null} [gameRolls] ReconnectResponse gameRolls
         * @property {Array.<protoPaodekuai.IPlayer>|null} [player] ReconnectResponse player
         */

        /**
         * Constructs a new ReconnectResponse.
         * @memberof protoPaodekuai
         * @classdesc Represents a ReconnectResponse.
         * @implements IReconnectResponse
         * @constructor
         * @param {protoPaodekuai.IReconnectResponse=} [properties] Properties to set
         */
        function ReconnectResponse(properties) {
            this.pCards = [];
            this.tableCards = [];
            this.player = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReconnectResponse pCards.
         * @member {Array.<number>} pCards
         * @memberof protoPaodekuai.ReconnectResponse
         * @instance
         */
        ReconnectResponse.prototype.pCards = $util.emptyArray;

        /**
         * ReconnectResponse isOpen.
         * @member {number} isOpen
         * @memberof protoPaodekuai.ReconnectResponse
         * @instance
         */
        ReconnectResponse.prototype.isOpen = 0;

        /**
         * ReconnectResponse tableUuid.
         * @member {string} tableUuid
         * @memberof protoPaodekuai.ReconnectResponse
         * @instance
         */
        ReconnectResponse.prototype.tableUuid = "";

        /**
         * ReconnectResponse tableCards.
         * @member {Array.<number>} tableCards
         * @memberof protoPaodekuai.ReconnectResponse
         * @instance
         */
        ReconnectResponse.prototype.tableCards = $util.emptyArray;

        /**
         * ReconnectResponse tableCardType.
         * @member {string} tableCardType
         * @memberof protoPaodekuai.ReconnectResponse
         * @instance
         */
        ReconnectResponse.prototype.tableCardType = "";

        /**
         * ReconnectResponse code.
         * @member {number} code
         * @memberof protoPaodekuai.ReconnectResponse
         * @instance
         */
        ReconnectResponse.prototype.code = 0;

        /**
         * ReconnectResponse roomId.
         * @member {number} roomId
         * @memberof protoPaodekuai.ReconnectResponse
         * @instance
         */
        ReconnectResponse.prototype.roomId = 0;

        /**
         * ReconnectResponse roomKwargs.
         * @member {string} roomKwargs
         * @memberof protoPaodekuai.ReconnectResponse
         * @instance
         */
        ReconnectResponse.prototype.roomKwargs = "";

        /**
         * ReconnectResponse roomOwner.
         * @member {string} roomOwner
         * @memberof protoPaodekuai.ReconnectResponse
         * @instance
         */
        ReconnectResponse.prototype.roomOwner = "";

        /**
         * ReconnectResponse roomOwnerInfo.
         * @member {string} roomOwnerInfo
         * @memberof protoPaodekuai.ReconnectResponse
         * @instance
         */
        ReconnectResponse.prototype.roomOwnerInfo = "";

        /**
         * ReconnectResponse roomState.
         * @member {number} roomState
         * @memberof protoPaodekuai.ReconnectResponse
         * @instance
         */
        ReconnectResponse.prototype.roomState = 0;

        /**
         * ReconnectResponse gameRolls.
         * @member {number} gameRolls
         * @memberof protoPaodekuai.ReconnectResponse
         * @instance
         */
        ReconnectResponse.prototype.gameRolls = 0;

        /**
         * ReconnectResponse player.
         * @member {Array.<protoPaodekuai.IPlayer>} player
         * @memberof protoPaodekuai.ReconnectResponse
         * @instance
         */
        ReconnectResponse.prototype.player = $util.emptyArray;

        /**
         * Creates a new ReconnectResponse instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.ReconnectResponse
         * @static
         * @param {protoPaodekuai.IReconnectResponse=} [properties] Properties to set
         * @returns {protoPaodekuai.ReconnectResponse} ReconnectResponse instance
         */
        ReconnectResponse.create = function create(properties) {
            return new ReconnectResponse(properties);
        };

        /**
         * Encodes the specified ReconnectResponse message. Does not implicitly {@link protoPaodekuai.ReconnectResponse.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.ReconnectResponse
         * @static
         * @param {protoPaodekuai.IReconnectResponse} message ReconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReconnectResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pCards != null && message.pCards.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.pCards.length; ++i)
                    writer.int32(message.pCards[i]);
                writer.ldelim();
            }
            if (message.tableUuid != null && Object.hasOwnProperty.call(message, "tableUuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tableUuid);
            if (message.tableCards != null && message.tableCards.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.tableCards.length; ++i)
                    writer.int32(message.tableCards[i]);
                writer.ldelim();
            }
            if (message.tableCardType != null && Object.hasOwnProperty.call(message, "tableCardType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.tableCardType);
            if (message.roomOwnerInfo != null && Object.hasOwnProperty.call(message, "roomOwnerInfo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.roomOwnerInfo);
            if (message.roomState != null && Object.hasOwnProperty.call(message, "roomState"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.roomState);
            if (message.gameRolls != null && Object.hasOwnProperty.call(message, "gameRolls"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.gameRolls);
            if (message.player != null && message.player.length)
                for (var i = 0; i < message.player.length; ++i)
                    $root.protoPaodekuai.Player.encode(message.player[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.code);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.roomId);
            if (message.roomKwargs != null && Object.hasOwnProperty.call(message, "roomKwargs"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.roomKwargs);
            if (message.roomOwner != null && Object.hasOwnProperty.call(message, "roomOwner"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.roomOwner);
            if (message.isOpen != null && Object.hasOwnProperty.call(message, "isOpen"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.isOpen);
            return writer;
        };

        /**
         * Encodes the specified ReconnectResponse message, length delimited. Does not implicitly {@link protoPaodekuai.ReconnectResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.ReconnectResponse
         * @static
         * @param {protoPaodekuai.IReconnectResponse} message ReconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReconnectResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReconnectResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.ReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.ReconnectResponse} ReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReconnectResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.ReconnectResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.pCards && message.pCards.length))
                        message.pCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.pCards.push(reader.int32());
                    } else
                        message.pCards.push(reader.int32());
                    break;
                case 13:
                    message.isOpen = reader.int32();
                    break;
                case 2:
                    message.tableUuid = reader.string();
                    break;
                case 3:
                    if (!(message.tableCards && message.tableCards.length))
                        message.tableCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tableCards.push(reader.int32());
                    } else
                        message.tableCards.push(reader.int32());
                    break;
                case 4:
                    message.tableCardType = reader.string();
                    break;
                case 9:
                    message.code = reader.int32();
                    break;
                case 10:
                    message.roomId = reader.uint32();
                    break;
                case 11:
                    message.roomKwargs = reader.string();
                    break;
                case 12:
                    message.roomOwner = reader.string();
                    break;
                case 5:
                    message.roomOwnerInfo = reader.string();
                    break;
                case 6:
                    message.roomState = reader.int32();
                    break;
                case 7:
                    message.gameRolls = reader.int32();
                    break;
                case 8:
                    if (!(message.player && message.player.length))
                        message.player = [];
                    message.player.push($root.protoPaodekuai.Player.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReconnectResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.ReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.ReconnectResponse} ReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReconnectResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReconnectResponse message.
         * @function verify
         * @memberof protoPaodekuai.ReconnectResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReconnectResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pCards != null && message.hasOwnProperty("pCards")) {
                if (!Array.isArray(message.pCards))
                    return "pCards: array expected";
                for (var i = 0; i < message.pCards.length; ++i)
                    if (!$util.isInteger(message.pCards[i]))
                        return "pCards: integer[] expected";
            }
            if (message.isOpen != null && message.hasOwnProperty("isOpen"))
                if (!$util.isInteger(message.isOpen))
                    return "isOpen: integer expected";
            if (message.tableUuid != null && message.hasOwnProperty("tableUuid"))
                if (!$util.isString(message.tableUuid))
                    return "tableUuid: string expected";
            if (message.tableCards != null && message.hasOwnProperty("tableCards")) {
                if (!Array.isArray(message.tableCards))
                    return "tableCards: array expected";
                for (var i = 0; i < message.tableCards.length; ++i)
                    if (!$util.isInteger(message.tableCards[i]))
                        return "tableCards: integer[] expected";
            }
            if (message.tableCardType != null && message.hasOwnProperty("tableCardType"))
                if (!$util.isString(message.tableCardType))
                    return "tableCardType: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            if (message.roomKwargs != null && message.hasOwnProperty("roomKwargs"))
                if (!$util.isString(message.roomKwargs))
                    return "roomKwargs: string expected";
            if (message.roomOwner != null && message.hasOwnProperty("roomOwner"))
                if (!$util.isString(message.roomOwner))
                    return "roomOwner: string expected";
            if (message.roomOwnerInfo != null && message.hasOwnProperty("roomOwnerInfo"))
                if (!$util.isString(message.roomOwnerInfo))
                    return "roomOwnerInfo: string expected";
            if (message.roomState != null && message.hasOwnProperty("roomState"))
                if (!$util.isInteger(message.roomState))
                    return "roomState: integer expected";
            if (message.gameRolls != null && message.hasOwnProperty("gameRolls"))
                if (!$util.isInteger(message.gameRolls))
                    return "gameRolls: integer expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                if (!Array.isArray(message.player))
                    return "player: array expected";
                for (var i = 0; i < message.player.length; ++i) {
                    var error = $root.protoPaodekuai.Player.verify(message.player[i]);
                    if (error)
                        return "player." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ReconnectResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.ReconnectResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.ReconnectResponse} ReconnectResponse
         */
        ReconnectResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.ReconnectResponse)
                return object;
            var message = new $root.protoPaodekuai.ReconnectResponse();
            if (object.pCards) {
                if (!Array.isArray(object.pCards))
                    throw TypeError(".protoPaodekuai.ReconnectResponse.pCards: array expected");
                message.pCards = [];
                for (var i = 0; i < object.pCards.length; ++i)
                    message.pCards[i] = object.pCards[i] | 0;
            }
            if (object.isOpen != null)
                message.isOpen = object.isOpen | 0;
            if (object.tableUuid != null)
                message.tableUuid = String(object.tableUuid);
            if (object.tableCards) {
                if (!Array.isArray(object.tableCards))
                    throw TypeError(".protoPaodekuai.ReconnectResponse.tableCards: array expected");
                message.tableCards = [];
                for (var i = 0; i < object.tableCards.length; ++i)
                    message.tableCards[i] = object.tableCards[i] | 0;
            }
            if (object.tableCardType != null)
                message.tableCardType = String(object.tableCardType);
            if (object.code != null)
                message.code = object.code | 0;
            if (object.roomId != null)
                message.roomId = object.roomId >>> 0;
            if (object.roomKwargs != null)
                message.roomKwargs = String(object.roomKwargs);
            if (object.roomOwner != null)
                message.roomOwner = String(object.roomOwner);
            if (object.roomOwnerInfo != null)
                message.roomOwnerInfo = String(object.roomOwnerInfo);
            if (object.roomState != null)
                message.roomState = object.roomState | 0;
            if (object.gameRolls != null)
                message.gameRolls = object.gameRolls | 0;
            if (object.player) {
                if (!Array.isArray(object.player))
                    throw TypeError(".protoPaodekuai.ReconnectResponse.player: array expected");
                message.player = [];
                for (var i = 0; i < object.player.length; ++i) {
                    if (typeof object.player[i] !== "object")
                        throw TypeError(".protoPaodekuai.ReconnectResponse.player: object expected");
                    message.player[i] = $root.protoPaodekuai.Player.fromObject(object.player[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ReconnectResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.ReconnectResponse
         * @static
         * @param {protoPaodekuai.ReconnectResponse} message ReconnectResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReconnectResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.pCards = [];
                object.tableCards = [];
                object.player = [];
            }
            if (options.defaults) {
                object.tableUuid = "";
                object.tableCardType = "";
                object.roomOwnerInfo = "";
                object.roomState = 0;
                object.gameRolls = 0;
                object.code = 0;
                object.roomId = 0;
                object.roomKwargs = "";
                object.roomOwner = "";
                object.isOpen = 0;
            }
            if (message.pCards && message.pCards.length) {
                object.pCards = [];
                for (var j = 0; j < message.pCards.length; ++j)
                    object.pCards[j] = message.pCards[j];
            }
            if (message.tableUuid != null && message.hasOwnProperty("tableUuid"))
                object.tableUuid = message.tableUuid;
            if (message.tableCards && message.tableCards.length) {
                object.tableCards = [];
                for (var j = 0; j < message.tableCards.length; ++j)
                    object.tableCards[j] = message.tableCards[j];
            }
            if (message.tableCardType != null && message.hasOwnProperty("tableCardType"))
                object.tableCardType = message.tableCardType;
            if (message.roomOwnerInfo != null && message.hasOwnProperty("roomOwnerInfo"))
                object.roomOwnerInfo = message.roomOwnerInfo;
            if (message.roomState != null && message.hasOwnProperty("roomState"))
                object.roomState = message.roomState;
            if (message.gameRolls != null && message.hasOwnProperty("gameRolls"))
                object.gameRolls = message.gameRolls;
            if (message.player && message.player.length) {
                object.player = [];
                for (var j = 0; j < message.player.length; ++j)
                    object.player[j] = $root.protoPaodekuai.Player.toObject(message.player[j], options);
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.roomKwargs != null && message.hasOwnProperty("roomKwargs"))
                object.roomKwargs = message.roomKwargs;
            if (message.roomOwner != null && message.hasOwnProperty("roomOwner"))
                object.roomOwner = message.roomOwner;
            if (message.isOpen != null && message.hasOwnProperty("isOpen"))
                object.isOpen = message.isOpen;
            return object;
        };

        /**
         * Converts this ReconnectResponse to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.ReconnectResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReconnectResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReconnectResponse;
    })();

    protoPaodekuai.ReadyRequest = (function() {

        /**
         * Properties of a ReadyRequest.
         * @memberof protoPaodekuai
         * @interface IReadyRequest
         * @property {string|null} [player] ReadyRequest player
         */

        /**
         * Constructs a new ReadyRequest.
         * @memberof protoPaodekuai
         * @classdesc Represents a ReadyRequest.
         * @implements IReadyRequest
         * @constructor
         * @param {protoPaodekuai.IReadyRequest=} [properties] Properties to set
         */
        function ReadyRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadyRequest player.
         * @member {string} player
         * @memberof protoPaodekuai.ReadyRequest
         * @instance
         */
        ReadyRequest.prototype.player = "";

        /**
         * Creates a new ReadyRequest instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.ReadyRequest
         * @static
         * @param {protoPaodekuai.IReadyRequest=} [properties] Properties to set
         * @returns {protoPaodekuai.ReadyRequest} ReadyRequest instance
         */
        ReadyRequest.create = function create(properties) {
            return new ReadyRequest(properties);
        };

        /**
         * Encodes the specified ReadyRequest message. Does not implicitly {@link protoPaodekuai.ReadyRequest.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.ReadyRequest
         * @static
         * @param {protoPaodekuai.IReadyRequest} message ReadyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.player);
            return writer;
        };

        /**
         * Encodes the specified ReadyRequest message, length delimited. Does not implicitly {@link protoPaodekuai.ReadyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.ReadyRequest
         * @static
         * @param {protoPaodekuai.IReadyRequest} message ReadyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.ReadyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.ReadyRequest} ReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.ReadyRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.ReadyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.ReadyRequest} ReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadyRequest message.
         * @function verify
         * @memberof protoPaodekuai.ReadyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadyRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player"))
                if (!$util.isString(message.player))
                    return "player: string expected";
            return null;
        };

        /**
         * Creates a ReadyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.ReadyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.ReadyRequest} ReadyRequest
         */
        ReadyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.ReadyRequest)
                return object;
            var message = new $root.protoPaodekuai.ReadyRequest();
            if (object.player != null)
                message.player = String(object.player);
            return message;
        };

        /**
         * Creates a plain object from a ReadyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.ReadyRequest
         * @static
         * @param {protoPaodekuai.ReadyRequest} message ReadyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadyRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.player = "";
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = message.player;
            return object;
        };

        /**
         * Converts this ReadyRequest to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.ReadyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReadyRequest;
    })();

    protoPaodekuai.ReadyResponse = (function() {

        /**
         * Properties of a ReadyResponse.
         * @memberof protoPaodekuai
         * @interface IReadyResponse
         * @property {number|null} [code] ReadyResponse code
         * @property {string|null} [uuid] ReadyResponse uuid
         */

        /**
         * Constructs a new ReadyResponse.
         * @memberof protoPaodekuai
         * @classdesc Represents a ReadyResponse.
         * @implements IReadyResponse
         * @constructor
         * @param {protoPaodekuai.IReadyResponse=} [properties] Properties to set
         */
        function ReadyResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadyResponse code.
         * @member {number} code
         * @memberof protoPaodekuai.ReadyResponse
         * @instance
         */
        ReadyResponse.prototype.code = 0;

        /**
         * ReadyResponse uuid.
         * @member {string} uuid
         * @memberof protoPaodekuai.ReadyResponse
         * @instance
         */
        ReadyResponse.prototype.uuid = "";

        /**
         * Creates a new ReadyResponse instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.ReadyResponse
         * @static
         * @param {protoPaodekuai.IReadyResponse=} [properties] Properties to set
         * @returns {protoPaodekuai.ReadyResponse} ReadyResponse instance
         */
        ReadyResponse.create = function create(properties) {
            return new ReadyResponse(properties);
        };

        /**
         * Encodes the specified ReadyResponse message. Does not implicitly {@link protoPaodekuai.ReadyResponse.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.ReadyResponse
         * @static
         * @param {protoPaodekuai.IReadyResponse} message ReadyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uuid);
            return writer;
        };

        /**
         * Encodes the specified ReadyResponse message, length delimited. Does not implicitly {@link protoPaodekuai.ReadyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.ReadyResponse
         * @static
         * @param {protoPaodekuai.IReadyResponse} message ReadyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.ReadyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.ReadyResponse} ReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.ReadyResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.uuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.ReadyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.ReadyResponse} ReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadyResponse message.
         * @function verify
         * @memberof protoPaodekuai.ReadyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadyResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            return null;
        };

        /**
         * Creates a ReadyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.ReadyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.ReadyResponse} ReadyResponse
         */
        ReadyResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.ReadyResponse)
                return object;
            var message = new $root.protoPaodekuai.ReadyResponse();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            return message;
        };

        /**
         * Creates a plain object from a ReadyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.ReadyResponse
         * @static
         * @param {protoPaodekuai.ReadyResponse} message ReadyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadyResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.uuid = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            return object;
        };

        /**
         * Converts this ReadyResponse to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.ReadyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReadyResponse;
    })();

    protoPaodekuai.DealResponse = (function() {

        /**
         * Properties of a DealResponse.
         * @memberof protoPaodekuai
         * @interface IDealResponse
         * @property {Array.<number>|null} [cards] DealResponse cards
         */

        /**
         * Constructs a new DealResponse.
         * @memberof protoPaodekuai
         * @classdesc Represents a DealResponse.
         * @implements IDealResponse
         * @constructor
         * @param {protoPaodekuai.IDealResponse=} [properties] Properties to set
         */
        function DealResponse(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DealResponse cards.
         * @member {Array.<number>} cards
         * @memberof protoPaodekuai.DealResponse
         * @instance
         */
        DealResponse.prototype.cards = $util.emptyArray;

        /**
         * Creates a new DealResponse instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.DealResponse
         * @static
         * @param {protoPaodekuai.IDealResponse=} [properties] Properties to set
         * @returns {protoPaodekuai.DealResponse} DealResponse instance
         */
        DealResponse.create = function create(properties) {
            return new DealResponse(properties);
        };

        /**
         * Encodes the specified DealResponse message. Does not implicitly {@link protoPaodekuai.DealResponse.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.DealResponse
         * @static
         * @param {protoPaodekuai.IDealResponse} message DealResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DealResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cards != null && message.cards.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.cards.length; ++i)
                    writer.int32(message.cards[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified DealResponse message, length delimited. Does not implicitly {@link protoPaodekuai.DealResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.DealResponse
         * @static
         * @param {protoPaodekuai.IDealResponse} message DealResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DealResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DealResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.DealResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.DealResponse} DealResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DealResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.DealResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DealResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.DealResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.DealResponse} DealResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DealResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DealResponse message.
         * @function verify
         * @memberof protoPaodekuai.DealResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DealResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i)
                    if (!$util.isInteger(message.cards[i]))
                        return "cards: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a DealResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.DealResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.DealResponse} DealResponse
         */
        DealResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.DealResponse)
                return object;
            var message = new $root.protoPaodekuai.DealResponse();
            if (object.cards) {
                if (!Array.isArray(object.cards))
                    throw TypeError(".protoPaodekuai.DealResponse.cards: array expected");
                message.cards = [];
                for (var i = 0; i < object.cards.length; ++i)
                    message.cards[i] = object.cards[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a DealResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.DealResponse
         * @static
         * @param {protoPaodekuai.DealResponse} message DealResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DealResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cards = [];
            if (message.cards && message.cards.length) {
                object.cards = [];
                for (var j = 0; j < message.cards.length; ++j)
                    object.cards[j] = message.cards[j];
            }
            return object;
        };

        /**
         * Converts this DealResponse to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.DealResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DealResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DealResponse;
    })();

    protoPaodekuai.StartChuPaiResponse = (function() {

        /**
         * Properties of a StartChuPaiResponse.
         * @memberof protoPaodekuai
         * @interface IStartChuPaiResponse
         * @property {string|null} [cardType] StartChuPaiResponse cardType
         * @property {string|null} [uuid] StartChuPaiResponse uuid
         * @property {string|null} [isFirst] StartChuPaiResponse isFirst
         * @property {string|null} [find_333x] StartChuPaiResponse find_333x
         * @property {string|null} [expireSeconds] StartChuPaiResponse expireSeconds
         */

        /**
         * Constructs a new StartChuPaiResponse.
         * @memberof protoPaodekuai
         * @classdesc Represents a StartChuPaiResponse.
         * @implements IStartChuPaiResponse
         * @constructor
         * @param {protoPaodekuai.IStartChuPaiResponse=} [properties] Properties to set
         */
        function StartChuPaiResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartChuPaiResponse cardType.
         * @member {string} cardType
         * @memberof protoPaodekuai.StartChuPaiResponse
         * @instance
         */
        StartChuPaiResponse.prototype.cardType = "";

        /**
         * StartChuPaiResponse uuid.
         * @member {string} uuid
         * @memberof protoPaodekuai.StartChuPaiResponse
         * @instance
         */
        StartChuPaiResponse.prototype.uuid = "";

        /**
         * StartChuPaiResponse isFirst.
         * @member {string} isFirst
         * @memberof protoPaodekuai.StartChuPaiResponse
         * @instance
         */
        StartChuPaiResponse.prototype.isFirst = "";

        /**
         * StartChuPaiResponse find_333x.
         * @member {string} find_333x
         * @memberof protoPaodekuai.StartChuPaiResponse
         * @instance
         */
        StartChuPaiResponse.prototype.find_333x = "";

        /**
         * StartChuPaiResponse expireSeconds.
         * @member {string} expireSeconds
         * @memberof protoPaodekuai.StartChuPaiResponse
         * @instance
         */
        StartChuPaiResponse.prototype.expireSeconds = "";

        /**
         * Creates a new StartChuPaiResponse instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.StartChuPaiResponse
         * @static
         * @param {protoPaodekuai.IStartChuPaiResponse=} [properties] Properties to set
         * @returns {protoPaodekuai.StartChuPaiResponse} StartChuPaiResponse instance
         */
        StartChuPaiResponse.create = function create(properties) {
            return new StartChuPaiResponse(properties);
        };

        /**
         * Encodes the specified StartChuPaiResponse message. Does not implicitly {@link protoPaodekuai.StartChuPaiResponse.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.StartChuPaiResponse
         * @static
         * @param {protoPaodekuai.IStartChuPaiResponse} message StartChuPaiResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartChuPaiResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cardType != null && Object.hasOwnProperty.call(message, "cardType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cardType);
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uuid);
            if (message.isFirst != null && Object.hasOwnProperty.call(message, "isFirst"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.isFirst);
            if (message.find_333x != null && Object.hasOwnProperty.call(message, "find_333x"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.find_333x);
            if (message.expireSeconds != null && Object.hasOwnProperty.call(message, "expireSeconds"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.expireSeconds);
            return writer;
        };

        /**
         * Encodes the specified StartChuPaiResponse message, length delimited. Does not implicitly {@link protoPaodekuai.StartChuPaiResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.StartChuPaiResponse
         * @static
         * @param {protoPaodekuai.IStartChuPaiResponse} message StartChuPaiResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartChuPaiResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartChuPaiResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.StartChuPaiResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.StartChuPaiResponse} StartChuPaiResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartChuPaiResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.StartChuPaiResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cardType = reader.string();
                    break;
                case 2:
                    message.uuid = reader.string();
                    break;
                case 3:
                    message.isFirst = reader.string();
                    break;
                case 4:
                    message.find_333x = reader.string();
                    break;
                case 5:
                    message.expireSeconds = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartChuPaiResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.StartChuPaiResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.StartChuPaiResponse} StartChuPaiResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartChuPaiResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartChuPaiResponse message.
         * @function verify
         * @memberof protoPaodekuai.StartChuPaiResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartChuPaiResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cardType != null && message.hasOwnProperty("cardType"))
                if (!$util.isString(message.cardType))
                    return "cardType: string expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.isFirst != null && message.hasOwnProperty("isFirst"))
                if (!$util.isString(message.isFirst))
                    return "isFirst: string expected";
            if (message.find_333x != null && message.hasOwnProperty("find_333x"))
                if (!$util.isString(message.find_333x))
                    return "find_333x: string expected";
            if (message.expireSeconds != null && message.hasOwnProperty("expireSeconds"))
                if (!$util.isString(message.expireSeconds))
                    return "expireSeconds: string expected";
            return null;
        };

        /**
         * Creates a StartChuPaiResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.StartChuPaiResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.StartChuPaiResponse} StartChuPaiResponse
         */
        StartChuPaiResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.StartChuPaiResponse)
                return object;
            var message = new $root.protoPaodekuai.StartChuPaiResponse();
            if (object.cardType != null)
                message.cardType = String(object.cardType);
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.isFirst != null)
                message.isFirst = String(object.isFirst);
            if (object.find_333x != null)
                message.find_333x = String(object.find_333x);
            if (object.expireSeconds != null)
                message.expireSeconds = String(object.expireSeconds);
            return message;
        };

        /**
         * Creates a plain object from a StartChuPaiResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.StartChuPaiResponse
         * @static
         * @param {protoPaodekuai.StartChuPaiResponse} message StartChuPaiResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartChuPaiResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cardType = "";
                object.uuid = "";
                object.isFirst = "";
                object.find_333x = "";
                object.expireSeconds = "";
            }
            if (message.cardType != null && message.hasOwnProperty("cardType"))
                object.cardType = message.cardType;
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.isFirst != null && message.hasOwnProperty("isFirst"))
                object.isFirst = message.isFirst;
            if (message.find_333x != null && message.hasOwnProperty("find_333x"))
                object.find_333x = message.find_333x;
            if (message.expireSeconds != null && message.hasOwnProperty("expireSeconds"))
                object.expireSeconds = message.expireSeconds;
            return object;
        };

        /**
         * Converts this StartChuPaiResponse to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.StartChuPaiResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartChuPaiResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartChuPaiResponse;
    })();

    protoPaodekuai.ChuPaiRequest = (function() {

        /**
         * Properties of a ChuPaiRequest.
         * @memberof protoPaodekuai
         * @interface IChuPaiRequest
         * @property {Array.<number>|null} [cards] ChuPaiRequest cards
         */

        /**
         * Constructs a new ChuPaiRequest.
         * @memberof protoPaodekuai
         * @classdesc Represents a ChuPaiRequest.
         * @implements IChuPaiRequest
         * @constructor
         * @param {protoPaodekuai.IChuPaiRequest=} [properties] Properties to set
         */
        function ChuPaiRequest(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChuPaiRequest cards.
         * @member {Array.<number>} cards
         * @memberof protoPaodekuai.ChuPaiRequest
         * @instance
         */
        ChuPaiRequest.prototype.cards = $util.emptyArray;

        /**
         * Creates a new ChuPaiRequest instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.ChuPaiRequest
         * @static
         * @param {protoPaodekuai.IChuPaiRequest=} [properties] Properties to set
         * @returns {protoPaodekuai.ChuPaiRequest} ChuPaiRequest instance
         */
        ChuPaiRequest.create = function create(properties) {
            return new ChuPaiRequest(properties);
        };

        /**
         * Encodes the specified ChuPaiRequest message. Does not implicitly {@link protoPaodekuai.ChuPaiRequest.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.ChuPaiRequest
         * @static
         * @param {protoPaodekuai.IChuPaiRequest} message ChuPaiRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChuPaiRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cards != null && message.cards.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.cards.length; ++i)
                    writer.int32(message.cards[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified ChuPaiRequest message, length delimited. Does not implicitly {@link protoPaodekuai.ChuPaiRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.ChuPaiRequest
         * @static
         * @param {protoPaodekuai.IChuPaiRequest} message ChuPaiRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChuPaiRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChuPaiRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.ChuPaiRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.ChuPaiRequest} ChuPaiRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChuPaiRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.ChuPaiRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChuPaiRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.ChuPaiRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.ChuPaiRequest} ChuPaiRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChuPaiRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChuPaiRequest message.
         * @function verify
         * @memberof protoPaodekuai.ChuPaiRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChuPaiRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i)
                    if (!$util.isInteger(message.cards[i]))
                        return "cards: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a ChuPaiRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.ChuPaiRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.ChuPaiRequest} ChuPaiRequest
         */
        ChuPaiRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.ChuPaiRequest)
                return object;
            var message = new $root.protoPaodekuai.ChuPaiRequest();
            if (object.cards) {
                if (!Array.isArray(object.cards))
                    throw TypeError(".protoPaodekuai.ChuPaiRequest.cards: array expected");
                message.cards = [];
                for (var i = 0; i < object.cards.length; ++i)
                    message.cards[i] = object.cards[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a ChuPaiRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.ChuPaiRequest
         * @static
         * @param {protoPaodekuai.ChuPaiRequest} message ChuPaiRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChuPaiRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cards = [];
            if (message.cards && message.cards.length) {
                object.cards = [];
                for (var j = 0; j < message.cards.length; ++j)
                    object.cards[j] = message.cards[j];
            }
            return object;
        };

        /**
         * Converts this ChuPaiRequest to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.ChuPaiRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChuPaiRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChuPaiRequest;
    })();

    protoPaodekuai.ChuPaiResponse = (function() {

        /**
         * Properties of a ChuPaiResponse.
         * @memberof protoPaodekuai
         * @interface IChuPaiResponse
         * @property {Array.<number>|null} [cards] ChuPaiResponse cards
         * @property {string|null} [cardType] ChuPaiResponse cardType
         * @property {string|null} [uuid] ChuPaiResponse uuid
         * @property {number|null} [res] ChuPaiResponse res
         */

        /**
         * Constructs a new ChuPaiResponse.
         * @memberof protoPaodekuai
         * @classdesc Represents a ChuPaiResponse.
         * @implements IChuPaiResponse
         * @constructor
         * @param {protoPaodekuai.IChuPaiResponse=} [properties] Properties to set
         */
        function ChuPaiResponse(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChuPaiResponse cards.
         * @member {Array.<number>} cards
         * @memberof protoPaodekuai.ChuPaiResponse
         * @instance
         */
        ChuPaiResponse.prototype.cards = $util.emptyArray;

        /**
         * ChuPaiResponse cardType.
         * @member {string} cardType
         * @memberof protoPaodekuai.ChuPaiResponse
         * @instance
         */
        ChuPaiResponse.prototype.cardType = "";

        /**
         * ChuPaiResponse uuid.
         * @member {string} uuid
         * @memberof protoPaodekuai.ChuPaiResponse
         * @instance
         */
        ChuPaiResponse.prototype.uuid = "";

        /**
         * ChuPaiResponse res.
         * @member {number} res
         * @memberof protoPaodekuai.ChuPaiResponse
         * @instance
         */
        ChuPaiResponse.prototype.res = 0;

        /**
         * Creates a new ChuPaiResponse instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.ChuPaiResponse
         * @static
         * @param {protoPaodekuai.IChuPaiResponse=} [properties] Properties to set
         * @returns {protoPaodekuai.ChuPaiResponse} ChuPaiResponse instance
         */
        ChuPaiResponse.create = function create(properties) {
            return new ChuPaiResponse(properties);
        };

        /**
         * Encodes the specified ChuPaiResponse message. Does not implicitly {@link protoPaodekuai.ChuPaiResponse.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.ChuPaiResponse
         * @static
         * @param {protoPaodekuai.IChuPaiResponse} message ChuPaiResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChuPaiResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cards != null && message.cards.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.cards.length; ++i)
                    writer.int32(message.cards[i]);
                writer.ldelim();
            }
            if (message.cardType != null && Object.hasOwnProperty.call(message, "cardType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.cardType);
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.uuid);
            if (message.res != null && Object.hasOwnProperty.call(message, "res"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.res);
            return writer;
        };

        /**
         * Encodes the specified ChuPaiResponse message, length delimited. Does not implicitly {@link protoPaodekuai.ChuPaiResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.ChuPaiResponse
         * @static
         * @param {protoPaodekuai.IChuPaiResponse} message ChuPaiResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChuPaiResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChuPaiResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.ChuPaiResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.ChuPaiResponse} ChuPaiResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChuPaiResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.ChuPaiResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                case 2:
                    message.cardType = reader.string();
                    break;
                case 3:
                    message.uuid = reader.string();
                    break;
                case 4:
                    message.res = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChuPaiResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.ChuPaiResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.ChuPaiResponse} ChuPaiResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChuPaiResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChuPaiResponse message.
         * @function verify
         * @memberof protoPaodekuai.ChuPaiResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChuPaiResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i)
                    if (!$util.isInteger(message.cards[i]))
                        return "cards: integer[] expected";
            }
            if (message.cardType != null && message.hasOwnProperty("cardType"))
                if (!$util.isString(message.cardType))
                    return "cardType: string expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.res != null && message.hasOwnProperty("res"))
                if (!$util.isInteger(message.res))
                    return "res: integer expected";
            return null;
        };

        /**
         * Creates a ChuPaiResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.ChuPaiResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.ChuPaiResponse} ChuPaiResponse
         */
        ChuPaiResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.ChuPaiResponse)
                return object;
            var message = new $root.protoPaodekuai.ChuPaiResponse();
            if (object.cards) {
                if (!Array.isArray(object.cards))
                    throw TypeError(".protoPaodekuai.ChuPaiResponse.cards: array expected");
                message.cards = [];
                for (var i = 0; i < object.cards.length; ++i)
                    message.cards[i] = object.cards[i] | 0;
            }
            if (object.cardType != null)
                message.cardType = String(object.cardType);
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.res != null)
                message.res = object.res | 0;
            return message;
        };

        /**
         * Creates a plain object from a ChuPaiResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.ChuPaiResponse
         * @static
         * @param {protoPaodekuai.ChuPaiResponse} message ChuPaiResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChuPaiResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cards = [];
            if (options.defaults) {
                object.cardType = "";
                object.uuid = "";
                object.res = 0;
            }
            if (message.cards && message.cards.length) {
                object.cards = [];
                for (var j = 0; j < message.cards.length; ++j)
                    object.cards[j] = message.cards[j];
            }
            if (message.cardType != null && message.hasOwnProperty("cardType"))
                object.cardType = message.cardType;
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.res != null && message.hasOwnProperty("res"))
                object.res = message.res;
            return object;
        };

        /**
         * Converts this ChuPaiResponse to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.ChuPaiResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChuPaiResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChuPaiResponse;
    })();

    protoPaodekuai.BaoDanResponse = (function() {

        /**
         * Properties of a BaoDanResponse.
         * @memberof protoPaodekuai
         * @interface IBaoDanResponse
         * @property {number|null} [msg] BaoDanResponse msg
         * @property {string|null} [uuid] BaoDanResponse uuid
         */

        /**
         * Constructs a new BaoDanResponse.
         * @memberof protoPaodekuai
         * @classdesc Represents a BaoDanResponse.
         * @implements IBaoDanResponse
         * @constructor
         * @param {protoPaodekuai.IBaoDanResponse=} [properties] Properties to set
         */
        function BaoDanResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BaoDanResponse msg.
         * @member {number} msg
         * @memberof protoPaodekuai.BaoDanResponse
         * @instance
         */
        BaoDanResponse.prototype.msg = 0;

        /**
         * BaoDanResponse uuid.
         * @member {string} uuid
         * @memberof protoPaodekuai.BaoDanResponse
         * @instance
         */
        BaoDanResponse.prototype.uuid = "";

        /**
         * Creates a new BaoDanResponse instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.BaoDanResponse
         * @static
         * @param {protoPaodekuai.IBaoDanResponse=} [properties] Properties to set
         * @returns {protoPaodekuai.BaoDanResponse} BaoDanResponse instance
         */
        BaoDanResponse.create = function create(properties) {
            return new BaoDanResponse(properties);
        };

        /**
         * Encodes the specified BaoDanResponse message. Does not implicitly {@link protoPaodekuai.BaoDanResponse.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.BaoDanResponse
         * @static
         * @param {protoPaodekuai.IBaoDanResponse} message BaoDanResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaoDanResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msg);
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uuid);
            return writer;
        };

        /**
         * Encodes the specified BaoDanResponse message, length delimited. Does not implicitly {@link protoPaodekuai.BaoDanResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.BaoDanResponse
         * @static
         * @param {protoPaodekuai.IBaoDanResponse} message BaoDanResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaoDanResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BaoDanResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.BaoDanResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.BaoDanResponse} BaoDanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaoDanResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.BaoDanResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msg = reader.int32();
                    break;
                case 2:
                    message.uuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BaoDanResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.BaoDanResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.BaoDanResponse} BaoDanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaoDanResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BaoDanResponse message.
         * @function verify
         * @memberof protoPaodekuai.BaoDanResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BaoDanResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isInteger(message.msg))
                    return "msg: integer expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            return null;
        };

        /**
         * Creates a BaoDanResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.BaoDanResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.BaoDanResponse} BaoDanResponse
         */
        BaoDanResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.BaoDanResponse)
                return object;
            var message = new $root.protoPaodekuai.BaoDanResponse();
            if (object.msg != null)
                message.msg = object.msg | 0;
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            return message;
        };

        /**
         * Creates a plain object from a BaoDanResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.BaoDanResponse
         * @static
         * @param {protoPaodekuai.BaoDanResponse} message BaoDanResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaoDanResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.msg = 0;
                object.uuid = "";
            }
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            return object;
        };

        /**
         * Converts this BaoDanResponse to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.BaoDanResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaoDanResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BaoDanResponse;
    })();

    protoPaodekuai.ExitRoomRequest = (function() {

        /**
         * Properties of an ExitRoomRequest.
         * @memberof protoPaodekuai
         * @interface IExitRoomRequest
         */

        /**
         * Constructs a new ExitRoomRequest.
         * @memberof protoPaodekuai
         * @classdesc Represents an ExitRoomRequest.
         * @implements IExitRoomRequest
         * @constructor
         * @param {protoPaodekuai.IExitRoomRequest=} [properties] Properties to set
         */
        function ExitRoomRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ExitRoomRequest instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.ExitRoomRequest
         * @static
         * @param {protoPaodekuai.IExitRoomRequest=} [properties] Properties to set
         * @returns {protoPaodekuai.ExitRoomRequest} ExitRoomRequest instance
         */
        ExitRoomRequest.create = function create(properties) {
            return new ExitRoomRequest(properties);
        };

        /**
         * Encodes the specified ExitRoomRequest message. Does not implicitly {@link protoPaodekuai.ExitRoomRequest.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.ExitRoomRequest
         * @static
         * @param {protoPaodekuai.IExitRoomRequest} message ExitRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ExitRoomRequest message, length delimited. Does not implicitly {@link protoPaodekuai.ExitRoomRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.ExitRoomRequest
         * @static
         * @param {protoPaodekuai.IExitRoomRequest} message ExitRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitRoomRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.ExitRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.ExitRoomRequest} ExitRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.ExitRoomRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExitRoomRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.ExitRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.ExitRoomRequest} ExitRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitRoomRequest message.
         * @function verify
         * @memberof protoPaodekuai.ExitRoomRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitRoomRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an ExitRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.ExitRoomRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.ExitRoomRequest} ExitRoomRequest
         */
        ExitRoomRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.ExitRoomRequest)
                return object;
            return new $root.protoPaodekuai.ExitRoomRequest();
        };

        /**
         * Creates a plain object from an ExitRoomRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.ExitRoomRequest
         * @static
         * @param {protoPaodekuai.ExitRoomRequest} message ExitRoomRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitRoomRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ExitRoomRequest to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.ExitRoomRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitRoomRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitRoomRequest;
    })();

    protoPaodekuai.ExitRoomResponse = (function() {

        /**
         * Properties of an ExitRoomResponse.
         * @memberof protoPaodekuai
         * @interface IExitRoomResponse
         * @property {number|null} [code] ExitRoomResponse code
         * @property {string|null} [player] ExitRoomResponse player
         * @property {number|null} [type] ExitRoomResponse type
         * @property {number|null} [msg] ExitRoomResponse msg
         */

        /**
         * Constructs a new ExitRoomResponse.
         * @memberof protoPaodekuai
         * @classdesc Represents an ExitRoomResponse.
         * @implements IExitRoomResponse
         * @constructor
         * @param {protoPaodekuai.IExitRoomResponse=} [properties] Properties to set
         */
        function ExitRoomResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExitRoomResponse code.
         * @member {number} code
         * @memberof protoPaodekuai.ExitRoomResponse
         * @instance
         */
        ExitRoomResponse.prototype.code = 0;

        /**
         * ExitRoomResponse player.
         * @member {string} player
         * @memberof protoPaodekuai.ExitRoomResponse
         * @instance
         */
        ExitRoomResponse.prototype.player = "";

        /**
         * ExitRoomResponse type.
         * @member {number} type
         * @memberof protoPaodekuai.ExitRoomResponse
         * @instance
         */
        ExitRoomResponse.prototype.type = 0;

        /**
         * ExitRoomResponse msg.
         * @member {number} msg
         * @memberof protoPaodekuai.ExitRoomResponse
         * @instance
         */
        ExitRoomResponse.prototype.msg = 0;

        /**
         * Creates a new ExitRoomResponse instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.ExitRoomResponse
         * @static
         * @param {protoPaodekuai.IExitRoomResponse=} [properties] Properties to set
         * @returns {protoPaodekuai.ExitRoomResponse} ExitRoomResponse instance
         */
        ExitRoomResponse.create = function create(properties) {
            return new ExitRoomResponse(properties);
        };

        /**
         * Encodes the specified ExitRoomResponse message. Does not implicitly {@link protoPaodekuai.ExitRoomResponse.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.ExitRoomResponse
         * @static
         * @param {protoPaodekuai.IExitRoomResponse} message ExitRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.player);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.msg);
            return writer;
        };

        /**
         * Encodes the specified ExitRoomResponse message, length delimited. Does not implicitly {@link protoPaodekuai.ExitRoomResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.ExitRoomResponse
         * @static
         * @param {protoPaodekuai.IExitRoomResponse} message ExitRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitRoomResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.ExitRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.ExitRoomResponse} ExitRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.ExitRoomResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.player = reader.string();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.msg = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExitRoomResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.ExitRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.ExitRoomResponse} ExitRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitRoomResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitRoomResponse message.
         * @function verify
         * @memberof protoPaodekuai.ExitRoomResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitRoomResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.player != null && message.hasOwnProperty("player"))
                if (!$util.isString(message.player))
                    return "player: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isInteger(message.msg))
                    return "msg: integer expected";
            return null;
        };

        /**
         * Creates an ExitRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.ExitRoomResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.ExitRoomResponse} ExitRoomResponse
         */
        ExitRoomResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.ExitRoomResponse)
                return object;
            var message = new $root.protoPaodekuai.ExitRoomResponse();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.player != null)
                message.player = String(object.player);
            if (object.type != null)
                message.type = object.type | 0;
            if (object.msg != null)
                message.msg = object.msg | 0;
            return message;
        };

        /**
         * Creates a plain object from an ExitRoomResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.ExitRoomResponse
         * @static
         * @param {protoPaodekuai.ExitRoomResponse} message ExitRoomResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitRoomResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.player = "";
                object.type = 0;
                object.msg = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = message.player;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this ExitRoomResponse to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.ExitRoomResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitRoomResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitRoomResponse;
    })();

    protoPaodekuai.DismissRoomRequest = (function() {

        /**
         * Properties of a DismissRoomRequest.
         * @memberof protoPaodekuai
         * @interface IDismissRoomRequest
         */

        /**
         * Constructs a new DismissRoomRequest.
         * @memberof protoPaodekuai
         * @classdesc Represents a DismissRoomRequest.
         * @implements IDismissRoomRequest
         * @constructor
         * @param {protoPaodekuai.IDismissRoomRequest=} [properties] Properties to set
         */
        function DismissRoomRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DismissRoomRequest instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.DismissRoomRequest
         * @static
         * @param {protoPaodekuai.IDismissRoomRequest=} [properties] Properties to set
         * @returns {protoPaodekuai.DismissRoomRequest} DismissRoomRequest instance
         */
        DismissRoomRequest.create = function create(properties) {
            return new DismissRoomRequest(properties);
        };

        /**
         * Encodes the specified DismissRoomRequest message. Does not implicitly {@link protoPaodekuai.DismissRoomRequest.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.DismissRoomRequest
         * @static
         * @param {protoPaodekuai.IDismissRoomRequest} message DismissRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissRoomRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified DismissRoomRequest message, length delimited. Does not implicitly {@link protoPaodekuai.DismissRoomRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.DismissRoomRequest
         * @static
         * @param {protoPaodekuai.IDismissRoomRequest} message DismissRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DismissRoomRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.DismissRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.DismissRoomRequest} DismissRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissRoomRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.DismissRoomRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DismissRoomRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.DismissRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.DismissRoomRequest} DismissRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissRoomRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DismissRoomRequest message.
         * @function verify
         * @memberof protoPaodekuai.DismissRoomRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DismissRoomRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a DismissRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.DismissRoomRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.DismissRoomRequest} DismissRoomRequest
         */
        DismissRoomRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.DismissRoomRequest)
                return object;
            return new $root.protoPaodekuai.DismissRoomRequest();
        };

        /**
         * Creates a plain object from a DismissRoomRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.DismissRoomRequest
         * @static
         * @param {protoPaodekuai.DismissRoomRequest} message DismissRoomRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DismissRoomRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this DismissRoomRequest to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.DismissRoomRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DismissRoomRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DismissRoomRequest;
    })();

    protoPaodekuai.DismissRoomResponse = (function() {

        /**
         * Properties of a DismissRoomResponse.
         * @memberof protoPaodekuai
         * @interface IDismissRoomResponse
         * @property {number|null} [code] DismissRoomResponse code
         * @property {number|null} [flag] DismissRoomResponse flag
         */

        /**
         * Constructs a new DismissRoomResponse.
         * @memberof protoPaodekuai
         * @classdesc Represents a DismissRoomResponse.
         * @implements IDismissRoomResponse
         * @constructor
         * @param {protoPaodekuai.IDismissRoomResponse=} [properties] Properties to set
         */
        function DismissRoomResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DismissRoomResponse code.
         * @member {number} code
         * @memberof protoPaodekuai.DismissRoomResponse
         * @instance
         */
        DismissRoomResponse.prototype.code = 0;

        /**
         * DismissRoomResponse flag.
         * @member {number} flag
         * @memberof protoPaodekuai.DismissRoomResponse
         * @instance
         */
        DismissRoomResponse.prototype.flag = 0;

        /**
         * Creates a new DismissRoomResponse instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.DismissRoomResponse
         * @static
         * @param {protoPaodekuai.IDismissRoomResponse=} [properties] Properties to set
         * @returns {protoPaodekuai.DismissRoomResponse} DismissRoomResponse instance
         */
        DismissRoomResponse.create = function create(properties) {
            return new DismissRoomResponse(properties);
        };

        /**
         * Encodes the specified DismissRoomResponse message. Does not implicitly {@link protoPaodekuai.DismissRoomResponse.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.DismissRoomResponse
         * @static
         * @param {protoPaodekuai.IDismissRoomResponse} message DismissRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissRoomResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.flag != null && Object.hasOwnProperty.call(message, "flag"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.flag);
            return writer;
        };

        /**
         * Encodes the specified DismissRoomResponse message, length delimited. Does not implicitly {@link protoPaodekuai.DismissRoomResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.DismissRoomResponse
         * @static
         * @param {protoPaodekuai.IDismissRoomResponse} message DismissRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DismissRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DismissRoomResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.DismissRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.DismissRoomResponse} DismissRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissRoomResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.DismissRoomResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.flag = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DismissRoomResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.DismissRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.DismissRoomResponse} DismissRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DismissRoomResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DismissRoomResponse message.
         * @function verify
         * @memberof protoPaodekuai.DismissRoomResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DismissRoomResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.flag != null && message.hasOwnProperty("flag"))
                if (!$util.isInteger(message.flag))
                    return "flag: integer expected";
            return null;
        };

        /**
         * Creates a DismissRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.DismissRoomResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.DismissRoomResponse} DismissRoomResponse
         */
        DismissRoomResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.DismissRoomResponse)
                return object;
            var message = new $root.protoPaodekuai.DismissRoomResponse();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.flag != null)
                message.flag = object.flag >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a DismissRoomResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.DismissRoomResponse
         * @static
         * @param {protoPaodekuai.DismissRoomResponse} message DismissRoomResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DismissRoomResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.flag = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.flag != null && message.hasOwnProperty("flag"))
                object.flag = message.flag;
            return object;
        };

        /**
         * Converts this DismissRoomResponse to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.DismissRoomResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DismissRoomResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DismissRoomResponse;
    })();

    protoPaodekuai.PlayerVoteRequest = (function() {

        /**
         * Properties of a PlayerVoteRequest.
         * @memberof protoPaodekuai
         * @interface IPlayerVoteRequest
         * @property {boolean|null} [flag] PlayerVoteRequest flag
         */

        /**
         * Constructs a new PlayerVoteRequest.
         * @memberof protoPaodekuai
         * @classdesc Represents a PlayerVoteRequest.
         * @implements IPlayerVoteRequest
         * @constructor
         * @param {protoPaodekuai.IPlayerVoteRequest=} [properties] Properties to set
         */
        function PlayerVoteRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerVoteRequest flag.
         * @member {boolean} flag
         * @memberof protoPaodekuai.PlayerVoteRequest
         * @instance
         */
        PlayerVoteRequest.prototype.flag = false;

        /**
         * Creates a new PlayerVoteRequest instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.PlayerVoteRequest
         * @static
         * @param {protoPaodekuai.IPlayerVoteRequest=} [properties] Properties to set
         * @returns {protoPaodekuai.PlayerVoteRequest} PlayerVoteRequest instance
         */
        PlayerVoteRequest.create = function create(properties) {
            return new PlayerVoteRequest(properties);
        };

        /**
         * Encodes the specified PlayerVoteRequest message. Does not implicitly {@link protoPaodekuai.PlayerVoteRequest.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.PlayerVoteRequest
         * @static
         * @param {protoPaodekuai.IPlayerVoteRequest} message PlayerVoteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerVoteRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.flag != null && Object.hasOwnProperty.call(message, "flag"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.flag);
            return writer;
        };

        /**
         * Encodes the specified PlayerVoteRequest message, length delimited. Does not implicitly {@link protoPaodekuai.PlayerVoteRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.PlayerVoteRequest
         * @static
         * @param {protoPaodekuai.IPlayerVoteRequest} message PlayerVoteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerVoteRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerVoteRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.PlayerVoteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.PlayerVoteRequest} PlayerVoteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerVoteRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.PlayerVoteRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.flag = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerVoteRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.PlayerVoteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.PlayerVoteRequest} PlayerVoteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerVoteRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerVoteRequest message.
         * @function verify
         * @memberof protoPaodekuai.PlayerVoteRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerVoteRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.flag != null && message.hasOwnProperty("flag"))
                if (typeof message.flag !== "boolean")
                    return "flag: boolean expected";
            return null;
        };

        /**
         * Creates a PlayerVoteRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.PlayerVoteRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.PlayerVoteRequest} PlayerVoteRequest
         */
        PlayerVoteRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.PlayerVoteRequest)
                return object;
            var message = new $root.protoPaodekuai.PlayerVoteRequest();
            if (object.flag != null)
                message.flag = Boolean(object.flag);
            return message;
        };

        /**
         * Creates a plain object from a PlayerVoteRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.PlayerVoteRequest
         * @static
         * @param {protoPaodekuai.PlayerVoteRequest} message PlayerVoteRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerVoteRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.flag = false;
            if (message.flag != null && message.hasOwnProperty("flag"))
                object.flag = message.flag;
            return object;
        };

        /**
         * Converts this PlayerVoteRequest to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.PlayerVoteRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerVoteRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerVoteRequest;
    })();

    protoPaodekuai.PlayerVoteResponse = (function() {

        /**
         * Properties of a PlayerVoteResponse.
         * @memberof protoPaodekuai
         * @interface IPlayerVoteResponse
         * @property {number|null} [code] PlayerVoteResponse code
         * @property {string|null} [player] PlayerVoteResponse player
         * @property {number|null} [flag] PlayerVoteResponse flag
         * @property {number|null} [type] PlayerVoteResponse type
         */

        /**
         * Constructs a new PlayerVoteResponse.
         * @memberof protoPaodekuai
         * @classdesc Represents a PlayerVoteResponse.
         * @implements IPlayerVoteResponse
         * @constructor
         * @param {protoPaodekuai.IPlayerVoteResponse=} [properties] Properties to set
         */
        function PlayerVoteResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerVoteResponse code.
         * @member {number} code
         * @memberof protoPaodekuai.PlayerVoteResponse
         * @instance
         */
        PlayerVoteResponse.prototype.code = 0;

        /**
         * PlayerVoteResponse player.
         * @member {string} player
         * @memberof protoPaodekuai.PlayerVoteResponse
         * @instance
         */
        PlayerVoteResponse.prototype.player = "";

        /**
         * PlayerVoteResponse flag.
         * @member {number} flag
         * @memberof protoPaodekuai.PlayerVoteResponse
         * @instance
         */
        PlayerVoteResponse.prototype.flag = 0;

        /**
         * PlayerVoteResponse type.
         * @member {number} type
         * @memberof protoPaodekuai.PlayerVoteResponse
         * @instance
         */
        PlayerVoteResponse.prototype.type = 0;

        /**
         * Creates a new PlayerVoteResponse instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.PlayerVoteResponse
         * @static
         * @param {protoPaodekuai.IPlayerVoteResponse=} [properties] Properties to set
         * @returns {protoPaodekuai.PlayerVoteResponse} PlayerVoteResponse instance
         */
        PlayerVoteResponse.create = function create(properties) {
            return new PlayerVoteResponse(properties);
        };

        /**
         * Encodes the specified PlayerVoteResponse message. Does not implicitly {@link protoPaodekuai.PlayerVoteResponse.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.PlayerVoteResponse
         * @static
         * @param {protoPaodekuai.IPlayerVoteResponse} message PlayerVoteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerVoteResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.player);
            if (message.flag != null && Object.hasOwnProperty.call(message, "flag"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.flag);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified PlayerVoteResponse message, length delimited. Does not implicitly {@link protoPaodekuai.PlayerVoteResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.PlayerVoteResponse
         * @static
         * @param {protoPaodekuai.IPlayerVoteResponse} message PlayerVoteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerVoteResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerVoteResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.PlayerVoteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.PlayerVoteResponse} PlayerVoteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerVoteResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.PlayerVoteResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.player = reader.string();
                    break;
                case 3:
                    message.flag = reader.int32();
                    break;
                case 4:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerVoteResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.PlayerVoteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.PlayerVoteResponse} PlayerVoteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerVoteResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerVoteResponse message.
         * @function verify
         * @memberof protoPaodekuai.PlayerVoteResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerVoteResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.player != null && message.hasOwnProperty("player"))
                if (!$util.isString(message.player))
                    return "player: string expected";
            if (message.flag != null && message.hasOwnProperty("flag"))
                if (!$util.isInteger(message.flag))
                    return "flag: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        /**
         * Creates a PlayerVoteResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.PlayerVoteResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.PlayerVoteResponse} PlayerVoteResponse
         */
        PlayerVoteResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.PlayerVoteResponse)
                return object;
            var message = new $root.protoPaodekuai.PlayerVoteResponse();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.player != null)
                message.player = String(object.player);
            if (object.flag != null)
                message.flag = object.flag | 0;
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerVoteResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.PlayerVoteResponse
         * @static
         * @param {protoPaodekuai.PlayerVoteResponse} message PlayerVoteResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerVoteResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.player = "";
                object.flag = 0;
                object.type = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = message.player;
            if (message.flag != null && message.hasOwnProperty("flag"))
                object.flag = message.flag;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this PlayerVoteResponse to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.PlayerVoteResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerVoteResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerVoteResponse;
    })();

    protoPaodekuai.SponsorVoteResponse = (function() {

        /**
         * Properties of a SponsorVoteResponse.
         * @memberof protoPaodekuai
         * @interface ISponsorVoteResponse
         * @property {number|null} [code] SponsorVoteResponse code
         * @property {number|null} [expireSeconds] SponsorVoteResponse expireSeconds
         * @property {number|null} [totalTime] SponsorVoteResponse totalTime
         * @property {string|null} [sponsor] SponsorVoteResponse sponsor
         * @property {Array.<protoPaodekuai.SponsorVoteResponse.IAgreeVote>|null} [agreevote] SponsorVoteResponse agreevote
         * @property {number|null} [timeCode] SponsorVoteResponse timeCode
         * @property {number|null} [type] SponsorVoteResponse type
         */

        /**
         * Constructs a new SponsorVoteResponse.
         * @memberof protoPaodekuai
         * @classdesc Represents a SponsorVoteResponse.
         * @implements ISponsorVoteResponse
         * @constructor
         * @param {protoPaodekuai.ISponsorVoteResponse=} [properties] Properties to set
         */
        function SponsorVoteResponse(properties) {
            this.agreevote = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SponsorVoteResponse code.
         * @member {number} code
         * @memberof protoPaodekuai.SponsorVoteResponse
         * @instance
         */
        SponsorVoteResponse.prototype.code = 0;

        /**
         * SponsorVoteResponse expireSeconds.
         * @member {number} expireSeconds
         * @memberof protoPaodekuai.SponsorVoteResponse
         * @instance
         */
        SponsorVoteResponse.prototype.expireSeconds = 0;

        /**
         * SponsorVoteResponse totalTime.
         * @member {number} totalTime
         * @memberof protoPaodekuai.SponsorVoteResponse
         * @instance
         */
        SponsorVoteResponse.prototype.totalTime = 0;

        /**
         * SponsorVoteResponse sponsor.
         * @member {string} sponsor
         * @memberof protoPaodekuai.SponsorVoteResponse
         * @instance
         */
        SponsorVoteResponse.prototype.sponsor = "";

        /**
         * SponsorVoteResponse agreevote.
         * @member {Array.<protoPaodekuai.SponsorVoteResponse.IAgreeVote>} agreevote
         * @memberof protoPaodekuai.SponsorVoteResponse
         * @instance
         */
        SponsorVoteResponse.prototype.agreevote = $util.emptyArray;

        /**
         * SponsorVoteResponse timeCode.
         * @member {number} timeCode
         * @memberof protoPaodekuai.SponsorVoteResponse
         * @instance
         */
        SponsorVoteResponse.prototype.timeCode = 0;

        /**
         * SponsorVoteResponse type.
         * @member {number} type
         * @memberof protoPaodekuai.SponsorVoteResponse
         * @instance
         */
        SponsorVoteResponse.prototype.type = 0;

        /**
         * Creates a new SponsorVoteResponse instance using the specified properties.
         * @function create
         * @memberof protoPaodekuai.SponsorVoteResponse
         * @static
         * @param {protoPaodekuai.ISponsorVoteResponse=} [properties] Properties to set
         * @returns {protoPaodekuai.SponsorVoteResponse} SponsorVoteResponse instance
         */
        SponsorVoteResponse.create = function create(properties) {
            return new SponsorVoteResponse(properties);
        };

        /**
         * Encodes the specified SponsorVoteResponse message. Does not implicitly {@link protoPaodekuai.SponsorVoteResponse.verify|verify} messages.
         * @function encode
         * @memberof protoPaodekuai.SponsorVoteResponse
         * @static
         * @param {protoPaodekuai.ISponsorVoteResponse} message SponsorVoteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SponsorVoteResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.expireSeconds != null && Object.hasOwnProperty.call(message, "expireSeconds"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.expireSeconds);
            if (message.totalTime != null && Object.hasOwnProperty.call(message, "totalTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.totalTime);
            if (message.sponsor != null && Object.hasOwnProperty.call(message, "sponsor"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sponsor);
            if (message.agreevote != null && message.agreevote.length)
                for (var i = 0; i < message.agreevote.length; ++i)
                    $root.protoPaodekuai.SponsorVoteResponse.AgreeVote.encode(message.agreevote[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.timeCode != null && Object.hasOwnProperty.call(message, "timeCode"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.timeCode);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified SponsorVoteResponse message, length delimited. Does not implicitly {@link protoPaodekuai.SponsorVoteResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoPaodekuai.SponsorVoteResponse
         * @static
         * @param {protoPaodekuai.ISponsorVoteResponse} message SponsorVoteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SponsorVoteResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SponsorVoteResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protoPaodekuai.SponsorVoteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoPaodekuai.SponsorVoteResponse} SponsorVoteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SponsorVoteResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.SponsorVoteResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.expireSeconds = reader.int32();
                    break;
                case 3:
                    message.totalTime = reader.int32();
                    break;
                case 4:
                    message.sponsor = reader.string();
                    break;
                case 5:
                    if (!(message.agreevote && message.agreevote.length))
                        message.agreevote = [];
                    message.agreevote.push($root.protoPaodekuai.SponsorVoteResponse.AgreeVote.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.timeCode = reader.int32();
                    break;
                case 7:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SponsorVoteResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoPaodekuai.SponsorVoteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoPaodekuai.SponsorVoteResponse} SponsorVoteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SponsorVoteResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SponsorVoteResponse message.
         * @function verify
         * @memberof protoPaodekuai.SponsorVoteResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SponsorVoteResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.expireSeconds != null && message.hasOwnProperty("expireSeconds"))
                if (!$util.isInteger(message.expireSeconds))
                    return "expireSeconds: integer expected";
            if (message.totalTime != null && message.hasOwnProperty("totalTime"))
                if (!$util.isInteger(message.totalTime))
                    return "totalTime: integer expected";
            if (message.sponsor != null && message.hasOwnProperty("sponsor"))
                if (!$util.isString(message.sponsor))
                    return "sponsor: string expected";
            if (message.agreevote != null && message.hasOwnProperty("agreevote")) {
                if (!Array.isArray(message.agreevote))
                    return "agreevote: array expected";
                for (var i = 0; i < message.agreevote.length; ++i) {
                    var error = $root.protoPaodekuai.SponsorVoteResponse.AgreeVote.verify(message.agreevote[i]);
                    if (error)
                        return "agreevote." + error;
                }
            }
            if (message.timeCode != null && message.hasOwnProperty("timeCode"))
                if (!$util.isInteger(message.timeCode))
                    return "timeCode: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        /**
         * Creates a SponsorVoteResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoPaodekuai.SponsorVoteResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoPaodekuai.SponsorVoteResponse} SponsorVoteResponse
         */
        SponsorVoteResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.SponsorVoteResponse)
                return object;
            var message = new $root.protoPaodekuai.SponsorVoteResponse();
            if (object.code != null)
                message.code = object.code >>> 0;
            if (object.expireSeconds != null)
                message.expireSeconds = object.expireSeconds | 0;
            if (object.totalTime != null)
                message.totalTime = object.totalTime | 0;
            if (object.sponsor != null)
                message.sponsor = String(object.sponsor);
            if (object.agreevote) {
                if (!Array.isArray(object.agreevote))
                    throw TypeError(".protoPaodekuai.SponsorVoteResponse.agreevote: array expected");
                message.agreevote = [];
                for (var i = 0; i < object.agreevote.length; ++i) {
                    if (typeof object.agreevote[i] !== "object")
                        throw TypeError(".protoPaodekuai.SponsorVoteResponse.agreevote: object expected");
                    message.agreevote[i] = $root.protoPaodekuai.SponsorVoteResponse.AgreeVote.fromObject(object.agreevote[i]);
                }
            }
            if (object.timeCode != null)
                message.timeCode = object.timeCode | 0;
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from a SponsorVoteResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoPaodekuai.SponsorVoteResponse
         * @static
         * @param {protoPaodekuai.SponsorVoteResponse} message SponsorVoteResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SponsorVoteResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.agreevote = [];
            if (options.defaults) {
                object.code = 0;
                object.expireSeconds = 0;
                object.totalTime = 0;
                object.sponsor = "";
                object.timeCode = 0;
                object.type = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.expireSeconds != null && message.hasOwnProperty("expireSeconds"))
                object.expireSeconds = message.expireSeconds;
            if (message.totalTime != null && message.hasOwnProperty("totalTime"))
                object.totalTime = message.totalTime;
            if (message.sponsor != null && message.hasOwnProperty("sponsor"))
                object.sponsor = message.sponsor;
            if (message.agreevote && message.agreevote.length) {
                object.agreevote = [];
                for (var j = 0; j < message.agreevote.length; ++j)
                    object.agreevote[j] = $root.protoPaodekuai.SponsorVoteResponse.AgreeVote.toObject(message.agreevote[j], options);
            }
            if (message.timeCode != null && message.hasOwnProperty("timeCode"))
                object.timeCode = message.timeCode;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this SponsorVoteResponse to JSON.
         * @function toJSON
         * @memberof protoPaodekuai.SponsorVoteResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SponsorVoteResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SponsorVoteResponse.AgreeVote = (function() {

            /**
             * Properties of an AgreeVote.
             * @memberof protoPaodekuai.SponsorVoteResponse
             * @interface IAgreeVote
             * @property {string|null} [player] AgreeVote player
             */

            /**
             * Constructs a new AgreeVote.
             * @memberof protoPaodekuai.SponsorVoteResponse
             * @classdesc Represents an AgreeVote.
             * @implements IAgreeVote
             * @constructor
             * @param {protoPaodekuai.SponsorVoteResponse.IAgreeVote=} [properties] Properties to set
             */
            function AgreeVote(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AgreeVote player.
             * @member {string} player
             * @memberof protoPaodekuai.SponsorVoteResponse.AgreeVote
             * @instance
             */
            AgreeVote.prototype.player = "";

            /**
             * Creates a new AgreeVote instance using the specified properties.
             * @function create
             * @memberof protoPaodekuai.SponsorVoteResponse.AgreeVote
             * @static
             * @param {protoPaodekuai.SponsorVoteResponse.IAgreeVote=} [properties] Properties to set
             * @returns {protoPaodekuai.SponsorVoteResponse.AgreeVote} AgreeVote instance
             */
            AgreeVote.create = function create(properties) {
                return new AgreeVote(properties);
            };

            /**
             * Encodes the specified AgreeVote message. Does not implicitly {@link protoPaodekuai.SponsorVoteResponse.AgreeVote.verify|verify} messages.
             * @function encode
             * @memberof protoPaodekuai.SponsorVoteResponse.AgreeVote
             * @static
             * @param {protoPaodekuai.SponsorVoteResponse.IAgreeVote} message AgreeVote message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreeVote.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.player);
                return writer;
            };

            /**
             * Encodes the specified AgreeVote message, length delimited. Does not implicitly {@link protoPaodekuai.SponsorVoteResponse.AgreeVote.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protoPaodekuai.SponsorVoteResponse.AgreeVote
             * @static
             * @param {protoPaodekuai.SponsorVoteResponse.IAgreeVote} message AgreeVote message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreeVote.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AgreeVote message from the specified reader or buffer.
             * @function decode
             * @memberof protoPaodekuai.SponsorVoteResponse.AgreeVote
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protoPaodekuai.SponsorVoteResponse.AgreeVote} AgreeVote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreeVote.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.SponsorVoteResponse.AgreeVote();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.player = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AgreeVote message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protoPaodekuai.SponsorVoteResponse.AgreeVote
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protoPaodekuai.SponsorVoteResponse.AgreeVote} AgreeVote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreeVote.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AgreeVote message.
             * @function verify
             * @memberof protoPaodekuai.SponsorVoteResponse.AgreeVote
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AgreeVote.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.player != null && message.hasOwnProperty("player"))
                    if (!$util.isString(message.player))
                        return "player: string expected";
                return null;
            };

            /**
             * Creates an AgreeVote message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protoPaodekuai.SponsorVoteResponse.AgreeVote
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protoPaodekuai.SponsorVoteResponse.AgreeVote} AgreeVote
             */
            AgreeVote.fromObject = function fromObject(object) {
                if (object instanceof $root.protoPaodekuai.SponsorVoteResponse.AgreeVote)
                    return object;
                var message = new $root.protoPaodekuai.SponsorVoteResponse.AgreeVote();
                if (object.player != null)
                    message.player = String(object.player);
                return message;
            };

            /**
             * Creates a plain object from an AgreeVote message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protoPaodekuai.SponsorVoteResponse.AgreeVote
             * @static
             * @param {protoPaodekuai.SponsorVoteResponse.AgreeVote} message AgreeVote
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AgreeVote.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.player = "";
                if (message.player != null && message.hasOwnProperty("player"))
                    object.player = message.player;
                return object;
            };

            /**
             * Converts this AgreeVote to JSON.
             * @function toJSON
             * @memberof protoPaodekuai.SponsorVoteResponse.AgreeVote
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AgreeVote.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return AgreeVote;
        })();

        return SponsorVoteResponse;
    })();

    return protoPaodekuai;
})();

module.exports = $root;
