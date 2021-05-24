/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.protoLogin = (function() {

    /**
     * Namespace protoLogin.
     * @exports protoLogin
     * @namespace
     */
    var protoLogin = {};

    protoLogin.UserBaseInfo = (function() {

        /**
         * Properties of a UserBaseInfo.
         * @memberof protoLogin
         * @interface IUserBaseInfo
         * @property {number|null} [aid] UserBaseInfo aid
         * @property {string|null} [uid] UserBaseInfo uid
         * @property {string|null} [avatarUrl] UserBaseInfo avatarUrl
         * @property {string|null} [userNick] UserBaseInfo userNick
         * @property {number|null} [role] UserBaseInfo role
         * @property {number|null} [state] UserBaseInfo state
         * @property {string|null} [permissions] UserBaseInfo permissions
         * @property {number|null} [groupid] UserBaseInfo groupid
         * @property {string|null} [groupname] UserBaseInfo groupname
         * @property {number|null} [score] UserBaseInfo score
         */

        /**
         * Constructs a new UserBaseInfo.
         * @memberof protoLogin
         * @classdesc Represents a UserBaseInfo.
         * @implements IUserBaseInfo
         * @constructor
         * @param {protoLogin.IUserBaseInfo=} [properties] Properties to set
         */
        function UserBaseInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserBaseInfo aid.
         * @member {number} aid
         * @memberof protoLogin.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.aid = 0;

        /**
         * UserBaseInfo uid.
         * @member {string} uid
         * @memberof protoLogin.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.uid = "";

        /**
         * UserBaseInfo avatarUrl.
         * @member {string} avatarUrl
         * @memberof protoLogin.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.avatarUrl = "";

        /**
         * UserBaseInfo userNick.
         * @member {string} userNick
         * @memberof protoLogin.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.userNick = "";

        /**
         * UserBaseInfo role.
         * @member {number} role
         * @memberof protoLogin.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.role = 0;

        /**
         * UserBaseInfo state.
         * @member {number} state
         * @memberof protoLogin.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.state = 0;

        /**
         * UserBaseInfo permissions.
         * @member {string} permissions
         * @memberof protoLogin.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.permissions = "";

        /**
         * UserBaseInfo groupid.
         * @member {number} groupid
         * @memberof protoLogin.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.groupid = 0;

        /**
         * UserBaseInfo groupname.
         * @member {string} groupname
         * @memberof protoLogin.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.groupname = "";

        /**
         * UserBaseInfo score.
         * @member {number} score
         * @memberof protoLogin.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.score = 0;

        /**
         * Creates a new UserBaseInfo instance using the specified properties.
         * @function create
         * @memberof protoLogin.UserBaseInfo
         * @static
         * @param {protoLogin.IUserBaseInfo=} [properties] Properties to set
         * @returns {protoLogin.UserBaseInfo} UserBaseInfo instance
         */
        UserBaseInfo.create = function create(properties) {
            return new UserBaseInfo(properties);
        };

        /**
         * Encodes the specified UserBaseInfo message. Does not implicitly {@link protoLogin.UserBaseInfo.verify|verify} messages.
         * @function encode
         * @memberof protoLogin.UserBaseInfo
         * @static
         * @param {protoLogin.IUserBaseInfo} message UserBaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBaseInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.aid != null && Object.hasOwnProperty.call(message, "aid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.aid);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatarUrl);
            if (message.userNick != null && Object.hasOwnProperty.call(message, "userNick"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.userNick);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.role);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.state);
            if (message.permissions != null && Object.hasOwnProperty.call(message, "permissions"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.permissions);
            if (message.groupid != null && Object.hasOwnProperty.call(message, "groupid"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.groupid);
            if (message.groupname != null && Object.hasOwnProperty.call(message, "groupname"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.groupname);
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.score);
            return writer;
        };

        /**
         * Encodes the specified UserBaseInfo message, length delimited. Does not implicitly {@link protoLogin.UserBaseInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoLogin.UserBaseInfo
         * @static
         * @param {protoLogin.IUserBaseInfo} message UserBaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBaseInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserBaseInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protoLogin.UserBaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoLogin.UserBaseInfo} UserBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBaseInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoLogin.UserBaseInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.aid = reader.uint32();
                    break;
                case 2:
                    message.uid = reader.string();
                    break;
                case 3:
                    message.avatarUrl = reader.string();
                    break;
                case 4:
                    message.userNick = reader.string();
                    break;
                case 5:
                    message.role = reader.uint32();
                    break;
                case 7:
                    message.state = reader.uint32();
                    break;
                case 8:
                    message.permissions = reader.string();
                    break;
                case 9:
                    message.groupid = reader.uint32();
                    break;
                case 10:
                    message.groupname = reader.string();
                    break;
                case 11:
                    message.score = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserBaseInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoLogin.UserBaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoLogin.UserBaseInfo} UserBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBaseInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserBaseInfo message.
         * @function verify
         * @memberof protoLogin.UserBaseInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserBaseInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.aid != null && message.hasOwnProperty("aid"))
                if (!$util.isInteger(message.aid))
                    return "aid: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                if (!$util.isString(message.avatarUrl))
                    return "avatarUrl: string expected";
            if (message.userNick != null && message.hasOwnProperty("userNick"))
                if (!$util.isString(message.userNick))
                    return "userNick: string expected";
            if (message.role != null && message.hasOwnProperty("role"))
                if (!$util.isInteger(message.role))
                    return "role: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.permissions != null && message.hasOwnProperty("permissions"))
                if (!$util.isString(message.permissions))
                    return "permissions: string expected";
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                if (!$util.isInteger(message.groupid))
                    return "groupid: integer expected";
            if (message.groupname != null && message.hasOwnProperty("groupname"))
                if (!$util.isString(message.groupname))
                    return "groupname: string expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            return null;
        };

        /**
         * Creates a UserBaseInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoLogin.UserBaseInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoLogin.UserBaseInfo} UserBaseInfo
         */
        UserBaseInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.protoLogin.UserBaseInfo)
                return object;
            var message = new $root.protoLogin.UserBaseInfo();
            if (object.aid != null)
                message.aid = object.aid >>> 0;
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.userNick != null)
                message.userNick = String(object.userNick);
            if (object.role != null)
                message.role = object.role >>> 0;
            if (object.state != null)
                message.state = object.state >>> 0;
            if (object.permissions != null)
                message.permissions = String(object.permissions);
            if (object.groupid != null)
                message.groupid = object.groupid >>> 0;
            if (object.groupname != null)
                message.groupname = String(object.groupname);
            if (object.score != null)
                message.score = object.score >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a UserBaseInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoLogin.UserBaseInfo
         * @static
         * @param {protoLogin.UserBaseInfo} message UserBaseInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserBaseInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.aid = 0;
                object.uid = "";
                object.avatarUrl = "";
                object.userNick = "";
                object.role = 0;
                object.state = 0;
                object.permissions = "";
                object.groupid = 0;
                object.groupname = "";
                object.score = 0;
            }
            if (message.aid != null && message.hasOwnProperty("aid"))
                object.aid = message.aid;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.userNick != null && message.hasOwnProperty("userNick"))
                object.userNick = message.userNick;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = message.role;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.permissions != null && message.hasOwnProperty("permissions"))
                object.permissions = message.permissions;
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                object.groupid = message.groupid;
            if (message.groupname != null && message.hasOwnProperty("groupname"))
                object.groupname = message.groupname;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            return object;
        };

        /**
         * Converts this UserBaseInfo to JSON.
         * @function toJSON
         * @memberof protoLogin.UserBaseInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserBaseInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserBaseInfo;
    })();

    protoLogin.UserDomain = (function() {

        /**
         * Properties of a UserDomain.
         * @memberof protoLogin
         * @interface IUserDomain
         * @property {string|null} [update] UserDomain update
         * @property {string|null} [login] UserDomain login
         * @property {string|null} [pay] UserDomain pay
         */

        /**
         * Constructs a new UserDomain.
         * @memberof protoLogin
         * @classdesc Represents a UserDomain.
         * @implements IUserDomain
         * @constructor
         * @param {protoLogin.IUserDomain=} [properties] Properties to set
         */
        function UserDomain(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserDomain update.
         * @member {string} update
         * @memberof protoLogin.UserDomain
         * @instance
         */
        UserDomain.prototype.update = "";

        /**
         * UserDomain login.
         * @member {string} login
         * @memberof protoLogin.UserDomain
         * @instance
         */
        UserDomain.prototype.login = "";

        /**
         * UserDomain pay.
         * @member {string} pay
         * @memberof protoLogin.UserDomain
         * @instance
         */
        UserDomain.prototype.pay = "";

        /**
         * Creates a new UserDomain instance using the specified properties.
         * @function create
         * @memberof protoLogin.UserDomain
         * @static
         * @param {protoLogin.IUserDomain=} [properties] Properties to set
         * @returns {protoLogin.UserDomain} UserDomain instance
         */
        UserDomain.create = function create(properties) {
            return new UserDomain(properties);
        };

        /**
         * Encodes the specified UserDomain message. Does not implicitly {@link protoLogin.UserDomain.verify|verify} messages.
         * @function encode
         * @memberof protoLogin.UserDomain
         * @static
         * @param {protoLogin.IUserDomain} message UserDomain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserDomain.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.update != null && Object.hasOwnProperty.call(message, "update"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.update);
            if (message.login != null && Object.hasOwnProperty.call(message, "login"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.login);
            if (message.pay != null && Object.hasOwnProperty.call(message, "pay"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pay);
            return writer;
        };

        /**
         * Encodes the specified UserDomain message, length delimited. Does not implicitly {@link protoLogin.UserDomain.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoLogin.UserDomain
         * @static
         * @param {protoLogin.IUserDomain} message UserDomain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserDomain.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserDomain message from the specified reader or buffer.
         * @function decode
         * @memberof protoLogin.UserDomain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoLogin.UserDomain} UserDomain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserDomain.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoLogin.UserDomain();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.update = reader.string();
                    break;
                case 2:
                    message.login = reader.string();
                    break;
                case 3:
                    message.pay = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserDomain message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoLogin.UserDomain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoLogin.UserDomain} UserDomain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserDomain.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserDomain message.
         * @function verify
         * @memberof protoLogin.UserDomain
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserDomain.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.update != null && message.hasOwnProperty("update"))
                if (!$util.isString(message.update))
                    return "update: string expected";
            if (message.login != null && message.hasOwnProperty("login"))
                if (!$util.isString(message.login))
                    return "login: string expected";
            if (message.pay != null && message.hasOwnProperty("pay"))
                if (!$util.isString(message.pay))
                    return "pay: string expected";
            return null;
        };

        /**
         * Creates a UserDomain message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoLogin.UserDomain
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoLogin.UserDomain} UserDomain
         */
        UserDomain.fromObject = function fromObject(object) {
            if (object instanceof $root.protoLogin.UserDomain)
                return object;
            var message = new $root.protoLogin.UserDomain();
            if (object.update != null)
                message.update = String(object.update);
            if (object.login != null)
                message.login = String(object.login);
            if (object.pay != null)
                message.pay = String(object.pay);
            return message;
        };

        /**
         * Creates a plain object from a UserDomain message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoLogin.UserDomain
         * @static
         * @param {protoLogin.UserDomain} message UserDomain
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserDomain.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.update = "";
                object.login = "";
                object.pay = "";
            }
            if (message.update != null && message.hasOwnProperty("update"))
                object.update = message.update;
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            if (message.pay != null && message.hasOwnProperty("pay"))
                object.pay = message.pay;
            return object;
        };

        /**
         * Converts this UserDomain to JSON.
         * @function toJSON
         * @memberof protoLogin.UserDomain
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserDomain.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserDomain;
    })();

    protoLogin.UserCurrencyInfo = (function() {

        /**
         * Properties of a UserCurrencyInfo.
         * @memberof protoLogin
         * @interface IUserCurrencyInfo
         * @property {number|null} [coin] UserCurrencyInfo coin
         * @property {number|null} [gold] UserCurrencyInfo gold
         * @property {number|null} [diamond] UserCurrencyInfo diamond
         */

        /**
         * Constructs a new UserCurrencyInfo.
         * @memberof protoLogin
         * @classdesc Represents a UserCurrencyInfo.
         * @implements IUserCurrencyInfo
         * @constructor
         * @param {protoLogin.IUserCurrencyInfo=} [properties] Properties to set
         */
        function UserCurrencyInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserCurrencyInfo coin.
         * @member {number} coin
         * @memberof protoLogin.UserCurrencyInfo
         * @instance
         */
        UserCurrencyInfo.prototype.coin = 0;

        /**
         * UserCurrencyInfo gold.
         * @member {number} gold
         * @memberof protoLogin.UserCurrencyInfo
         * @instance
         */
        UserCurrencyInfo.prototype.gold = 0;

        /**
         * UserCurrencyInfo diamond.
         * @member {number} diamond
         * @memberof protoLogin.UserCurrencyInfo
         * @instance
         */
        UserCurrencyInfo.prototype.diamond = 0;

        /**
         * Creates a new UserCurrencyInfo instance using the specified properties.
         * @function create
         * @memberof protoLogin.UserCurrencyInfo
         * @static
         * @param {protoLogin.IUserCurrencyInfo=} [properties] Properties to set
         * @returns {protoLogin.UserCurrencyInfo} UserCurrencyInfo instance
         */
        UserCurrencyInfo.create = function create(properties) {
            return new UserCurrencyInfo(properties);
        };

        /**
         * Encodes the specified UserCurrencyInfo message. Does not implicitly {@link protoLogin.UserCurrencyInfo.verify|verify} messages.
         * @function encode
         * @memberof protoLogin.UserCurrencyInfo
         * @static
         * @param {protoLogin.IUserCurrencyInfo} message UserCurrencyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserCurrencyInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.coin);
            if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gold);
            if (message.diamond != null && Object.hasOwnProperty.call(message, "diamond"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.diamond);
            return writer;
        };

        /**
         * Encodes the specified UserCurrencyInfo message, length delimited. Does not implicitly {@link protoLogin.UserCurrencyInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoLogin.UserCurrencyInfo
         * @static
         * @param {protoLogin.IUserCurrencyInfo} message UserCurrencyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserCurrencyInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserCurrencyInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protoLogin.UserCurrencyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoLogin.UserCurrencyInfo} UserCurrencyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserCurrencyInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoLogin.UserCurrencyInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.coin = reader.int32();
                    break;
                case 2:
                    message.gold = reader.int32();
                    break;
                case 3:
                    message.diamond = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserCurrencyInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoLogin.UserCurrencyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoLogin.UserCurrencyInfo} UserCurrencyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserCurrencyInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserCurrencyInfo message.
         * @function verify
         * @memberof protoLogin.UserCurrencyInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserCurrencyInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (!$util.isInteger(message.coin))
                    return "coin: integer expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold))
                    return "gold: integer expected";
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                if (!$util.isInteger(message.diamond))
                    return "diamond: integer expected";
            return null;
        };

        /**
         * Creates a UserCurrencyInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoLogin.UserCurrencyInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoLogin.UserCurrencyInfo} UserCurrencyInfo
         */
        UserCurrencyInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.protoLogin.UserCurrencyInfo)
                return object;
            var message = new $root.protoLogin.UserCurrencyInfo();
            if (object.coin != null)
                message.coin = object.coin | 0;
            if (object.gold != null)
                message.gold = object.gold | 0;
            if (object.diamond != null)
                message.diamond = object.diamond | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserCurrencyInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoLogin.UserCurrencyInfo
         * @static
         * @param {protoLogin.UserCurrencyInfo} message UserCurrencyInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserCurrencyInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.coin = 0;
                object.gold = 0;
                object.diamond = 0;
            }
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = message.coin;
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                object.diamond = message.diamond;
            return object;
        };

        /**
         * Converts this UserCurrencyInfo to JSON.
         * @function toJSON
         * @memberof protoLogin.UserCurrencyInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserCurrencyInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserCurrencyInfo;
    })();

    protoLogin.ReconnectionInfo = (function() {

        /**
         * Properties of a ReconnectionInfo.
         * @memberof protoLogin
         * @interface IReconnectionInfo
         * @property {boolean|null} [state] ReconnectionInfo state
         * @property {number|null} [roomId] ReconnectionInfo roomId
         * @property {number|null} [gameId] ReconnectionInfo gameId
         * @property {string|null} [serverIp] ReconnectionInfo serverIp
         * @property {number|null} [serverPort] ReconnectionInfo serverPort
         */

        /**
         * Constructs a new ReconnectionInfo.
         * @memberof protoLogin
         * @classdesc Represents a ReconnectionInfo.
         * @implements IReconnectionInfo
         * @constructor
         * @param {protoLogin.IReconnectionInfo=} [properties] Properties to set
         */
        function ReconnectionInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReconnectionInfo state.
         * @member {boolean} state
         * @memberof protoLogin.ReconnectionInfo
         * @instance
         */
        ReconnectionInfo.prototype.state = false;

        /**
         * ReconnectionInfo roomId.
         * @member {number} roomId
         * @memberof protoLogin.ReconnectionInfo
         * @instance
         */
        ReconnectionInfo.prototype.roomId = 0;

        /**
         * ReconnectionInfo gameId.
         * @member {number} gameId
         * @memberof protoLogin.ReconnectionInfo
         * @instance
         */
        ReconnectionInfo.prototype.gameId = 0;

        /**
         * ReconnectionInfo serverIp.
         * @member {string} serverIp
         * @memberof protoLogin.ReconnectionInfo
         * @instance
         */
        ReconnectionInfo.prototype.serverIp = "";

        /**
         * ReconnectionInfo serverPort.
         * @member {number} serverPort
         * @memberof protoLogin.ReconnectionInfo
         * @instance
         */
        ReconnectionInfo.prototype.serverPort = 0;

        /**
         * Creates a new ReconnectionInfo instance using the specified properties.
         * @function create
         * @memberof protoLogin.ReconnectionInfo
         * @static
         * @param {protoLogin.IReconnectionInfo=} [properties] Properties to set
         * @returns {protoLogin.ReconnectionInfo} ReconnectionInfo instance
         */
        ReconnectionInfo.create = function create(properties) {
            return new ReconnectionInfo(properties);
        };

        /**
         * Encodes the specified ReconnectionInfo message. Does not implicitly {@link protoLogin.ReconnectionInfo.verify|verify} messages.
         * @function encode
         * @memberof protoLogin.ReconnectionInfo
         * @static
         * @param {protoLogin.IReconnectionInfo} message ReconnectionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReconnectionInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.state);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.roomId);
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.gameId);
            if (message.serverIp != null && Object.hasOwnProperty.call(message, "serverIp"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.serverIp);
            if (message.serverPort != null && Object.hasOwnProperty.call(message, "serverPort"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.serverPort);
            return writer;
        };

        /**
         * Encodes the specified ReconnectionInfo message, length delimited. Does not implicitly {@link protoLogin.ReconnectionInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoLogin.ReconnectionInfo
         * @static
         * @param {protoLogin.IReconnectionInfo} message ReconnectionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReconnectionInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReconnectionInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protoLogin.ReconnectionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoLogin.ReconnectionInfo} ReconnectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReconnectionInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoLogin.ReconnectionInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.state = reader.bool();
                    break;
                case 2:
                    message.roomId = reader.uint32();
                    break;
                case 3:
                    message.gameId = reader.uint32();
                    break;
                case 4:
                    message.serverIp = reader.string();
                    break;
                case 5:
                    message.serverPort = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReconnectionInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoLogin.ReconnectionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoLogin.ReconnectionInfo} ReconnectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReconnectionInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReconnectionInfo message.
         * @function verify
         * @memberof protoLogin.ReconnectionInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReconnectionInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (typeof message.state !== "boolean")
                    return "state: boolean expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.serverIp != null && message.hasOwnProperty("serverIp"))
                if (!$util.isString(message.serverIp))
                    return "serverIp: string expected";
            if (message.serverPort != null && message.hasOwnProperty("serverPort"))
                if (!$util.isInteger(message.serverPort))
                    return "serverPort: integer expected";
            return null;
        };

        /**
         * Creates a ReconnectionInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoLogin.ReconnectionInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoLogin.ReconnectionInfo} ReconnectionInfo
         */
        ReconnectionInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.protoLogin.ReconnectionInfo)
                return object;
            var message = new $root.protoLogin.ReconnectionInfo();
            if (object.state != null)
                message.state = Boolean(object.state);
            if (object.roomId != null)
                message.roomId = object.roomId >>> 0;
            if (object.gameId != null)
                message.gameId = object.gameId >>> 0;
            if (object.serverIp != null)
                message.serverIp = String(object.serverIp);
            if (object.serverPort != null)
                message.serverPort = object.serverPort >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ReconnectionInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoLogin.ReconnectionInfo
         * @static
         * @param {protoLogin.ReconnectionInfo} message ReconnectionInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReconnectionInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.state = false;
                object.roomId = 0;
                object.gameId = 0;
                object.serverIp = "";
                object.serverPort = 0;
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.serverIp != null && message.hasOwnProperty("serverIp"))
                object.serverIp = message.serverIp;
            if (message.serverPort != null && message.hasOwnProperty("serverPort"))
                object.serverPort = message.serverPort;
            return object;
        };

        /**
         * Converts this ReconnectionInfo to JSON.
         * @function toJSON
         * @memberof protoLogin.ReconnectionInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReconnectionInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReconnectionInfo;
    })();

    protoLogin.UserSocial = (function() {

        /**
         * Properties of a UserSocial.
         * @memberof protoLogin
         * @interface IUserSocial
         * @property {number|null} [gender] UserSocial gender
         * @property {number|null} [round] UserSocial round
         * @property {number|null} [regTime] UserSocial regTime
         * @property {number|null} [grade] UserSocial grade
         */

        /**
         * Constructs a new UserSocial.
         * @memberof protoLogin
         * @classdesc Represents a UserSocial.
         * @implements IUserSocial
         * @constructor
         * @param {protoLogin.IUserSocial=} [properties] Properties to set
         */
        function UserSocial(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserSocial gender.
         * @member {number} gender
         * @memberof protoLogin.UserSocial
         * @instance
         */
        UserSocial.prototype.gender = 0;

        /**
         * UserSocial round.
         * @member {number} round
         * @memberof protoLogin.UserSocial
         * @instance
         */
        UserSocial.prototype.round = 0;

        /**
         * UserSocial regTime.
         * @member {number} regTime
         * @memberof protoLogin.UserSocial
         * @instance
         */
        UserSocial.prototype.regTime = 0;

        /**
         * UserSocial grade.
         * @member {number} grade
         * @memberof protoLogin.UserSocial
         * @instance
         */
        UserSocial.prototype.grade = 0;

        /**
         * Creates a new UserSocial instance using the specified properties.
         * @function create
         * @memberof protoLogin.UserSocial
         * @static
         * @param {protoLogin.IUserSocial=} [properties] Properties to set
         * @returns {protoLogin.UserSocial} UserSocial instance
         */
        UserSocial.create = function create(properties) {
            return new UserSocial(properties);
        };

        /**
         * Encodes the specified UserSocial message. Does not implicitly {@link protoLogin.UserSocial.verify|verify} messages.
         * @function encode
         * @memberof protoLogin.UserSocial
         * @static
         * @param {protoLogin.IUserSocial} message UserSocial message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSocial.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.gender);
            if (message.round != null && Object.hasOwnProperty.call(message, "round"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.round);
            if (message.regTime != null && Object.hasOwnProperty.call(message, "regTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.regTime);
            if (message.grade != null && Object.hasOwnProperty.call(message, "grade"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.grade);
            return writer;
        };

        /**
         * Encodes the specified UserSocial message, length delimited. Does not implicitly {@link protoLogin.UserSocial.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoLogin.UserSocial
         * @static
         * @param {protoLogin.IUserSocial} message UserSocial message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSocial.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserSocial message from the specified reader or buffer.
         * @function decode
         * @memberof protoLogin.UserSocial
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoLogin.UserSocial} UserSocial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSocial.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoLogin.UserSocial();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gender = reader.uint32();
                    break;
                case 2:
                    message.round = reader.uint32();
                    break;
                case 3:
                    message.regTime = reader.uint32();
                    break;
                case 4:
                    message.grade = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserSocial message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoLogin.UserSocial
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoLogin.UserSocial} UserSocial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSocial.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserSocial message.
         * @function verify
         * @memberof protoLogin.UserSocial
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserSocial.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isInteger(message.gender))
                    return "gender: integer expected";
            if (message.round != null && message.hasOwnProperty("round"))
                if (!$util.isInteger(message.round))
                    return "round: integer expected";
            if (message.regTime != null && message.hasOwnProperty("regTime"))
                if (!$util.isInteger(message.regTime))
                    return "regTime: integer expected";
            if (message.grade != null && message.hasOwnProperty("grade"))
                if (!$util.isInteger(message.grade))
                    return "grade: integer expected";
            return null;
        };

        /**
         * Creates a UserSocial message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoLogin.UserSocial
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoLogin.UserSocial} UserSocial
         */
        UserSocial.fromObject = function fromObject(object) {
            if (object instanceof $root.protoLogin.UserSocial)
                return object;
            var message = new $root.protoLogin.UserSocial();
            if (object.gender != null)
                message.gender = object.gender >>> 0;
            if (object.round != null)
                message.round = object.round >>> 0;
            if (object.regTime != null)
                message.regTime = object.regTime >>> 0;
            if (object.grade != null)
                message.grade = object.grade >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a UserSocial message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoLogin.UserSocial
         * @static
         * @param {protoLogin.UserSocial} message UserSocial
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserSocial.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gender = 0;
                object.round = 0;
                object.regTime = 0;
                object.grade = 0;
            }
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = message.gender;
            if (message.round != null && message.hasOwnProperty("round"))
                object.round = message.round;
            if (message.regTime != null && message.hasOwnProperty("regTime"))
                object.regTime = message.regTime;
            if (message.grade != null && message.hasOwnProperty("grade"))
                object.grade = message.grade;
            return object;
        };

        /**
         * Converts this UserSocial to JSON.
         * @function toJSON
         * @memberof protoLogin.UserSocial
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserSocial.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserSocial;
    })();

    protoLogin.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof protoLogin
         * @interface ILoginRequest
         * @property {string|null} [openId] LoginRequest openId
         * @property {number|null} [channel] LoginRequest channel
         * @property {number|null} [appId] LoginRequest appId
         * @property {string|null} [deviceId] LoginRequest deviceId
         * @property {string|null} [verId] LoginRequest verId
         * @property {string|null} [location] LoginRequest location
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof protoLogin
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {protoLogin.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest openId.
         * @member {string} openId
         * @memberof protoLogin.LoginRequest
         * @instance
         */
        LoginRequest.prototype.openId = "";

        /**
         * LoginRequest channel.
         * @member {number} channel
         * @memberof protoLogin.LoginRequest
         * @instance
         */
        LoginRequest.prototype.channel = 0;

        /**
         * LoginRequest appId.
         * @member {number} appId
         * @memberof protoLogin.LoginRequest
         * @instance
         */
        LoginRequest.prototype.appId = 0;

        /**
         * LoginRequest deviceId.
         * @member {string} deviceId
         * @memberof protoLogin.LoginRequest
         * @instance
         */
        LoginRequest.prototype.deviceId = "";

        /**
         * LoginRequest verId.
         * @member {string} verId
         * @memberof protoLogin.LoginRequest
         * @instance
         */
        LoginRequest.prototype.verId = "";

        /**
         * LoginRequest location.
         * @member {string} location
         * @memberof protoLogin.LoginRequest
         * @instance
         */
        LoginRequest.prototype.location = "";

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof protoLogin.LoginRequest
         * @static
         * @param {protoLogin.ILoginRequest=} [properties] Properties to set
         * @returns {protoLogin.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link protoLogin.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof protoLogin.LoginRequest
         * @static
         * @param {protoLogin.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.openId != null && Object.hasOwnProperty.call(message, "openId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.openId);
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.channel);
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.appId);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.deviceId);
            if (message.verId != null && Object.hasOwnProperty.call(message, "verId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.verId);
            if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.location);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link protoLogin.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoLogin.LoginRequest
         * @static
         * @param {protoLogin.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protoLogin.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoLogin.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoLogin.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.openId = reader.string();
                    break;
                case 2:
                    message.channel = reader.int32();
                    break;
                case 3:
                    message.appId = reader.int32();
                    break;
                case 5:
                    message.deviceId = reader.string();
                    break;
                case 6:
                    message.verId = reader.string();
                    break;
                case 7:
                    message.location = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoLogin.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoLogin.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof protoLogin.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.openId != null && message.hasOwnProperty("openId"))
                if (!$util.isString(message.openId))
                    return "openId: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isInteger(message.channel))
                    return "channel: integer expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isInteger(message.appId))
                    return "appId: integer expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.verId != null && message.hasOwnProperty("verId"))
                if (!$util.isString(message.verId))
                    return "verId: string expected";
            if (message.location != null && message.hasOwnProperty("location"))
                if (!$util.isString(message.location))
                    return "location: string expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoLogin.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoLogin.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protoLogin.LoginRequest)
                return object;
            var message = new $root.protoLogin.LoginRequest();
            if (object.openId != null)
                message.openId = String(object.openId);
            if (object.channel != null)
                message.channel = object.channel | 0;
            if (object.appId != null)
                message.appId = object.appId | 0;
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.verId != null)
                message.verId = String(object.verId);
            if (object.location != null)
                message.location = String(object.location);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoLogin.LoginRequest
         * @static
         * @param {protoLogin.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.openId = "";
                object.channel = 0;
                object.appId = 0;
                object.deviceId = "";
                object.verId = "";
                object.location = "";
            }
            if (message.openId != null && message.hasOwnProperty("openId"))
                object.openId = message.openId;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.verId != null && message.hasOwnProperty("verId"))
                object.verId = message.verId;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = message.location;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof protoLogin.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRequest;
    })();

    protoLogin.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof protoLogin
         * @interface ILoginResponse
         * @property {number|null} [code] LoginResponse code
         * @property {string|null} [openId] LoginResponse openId
         * @property {string|null} [sessionKey] LoginResponse sessionKey
         * @property {number|null} [invitation] LoginResponse invitation
         * @property {number|null} [parentId] LoginResponse parentId
         * @property {string|null} [ip] LoginResponse ip
         * @property {string|null} [location] LoginResponse location
         * @property {boolean|null} [iosReview] LoginResponse iosReview
         * @property {boolean|null} [isBlack] LoginResponse isBlack
         * @property {string|null} [notice] LoginResponse notice
         * @property {string|null} [shareUrl] LoginResponse shareUrl
         * @property {boolean|null} [nonMemberRecharge] LoginResponse nonMemberRecharge
         * @property {protoLogin.IUserDomain|null} [userDomain] LoginResponse userDomain
         * @property {protoLogin.IUserBaseInfo|null} [userBaseInfo] LoginResponse userBaseInfo
         * @property {protoLogin.IUserCurrencyInfo|null} [userCoin] LoginResponse userCoin
         * @property {protoLogin.IReconnectionInfo|null} [reconnectionInfo] LoginResponse reconnectionInfo
         * @property {protoLogin.IUserSocial|null} [userSocial] LoginResponse userSocial
         * @property {number|null} [isFlag] LoginResponse isFlag
         * @property {string|null} [announcements] LoginResponse announcements
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof protoLogin
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {protoLogin.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse code.
         * @member {number} code
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.code = 0;

        /**
         * LoginResponse openId.
         * @member {string} openId
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.openId = "";

        /**
         * LoginResponse sessionKey.
         * @member {string} sessionKey
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.sessionKey = "";

        /**
         * LoginResponse invitation.
         * @member {number} invitation
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.invitation = 0;

        /**
         * LoginResponse parentId.
         * @member {number} parentId
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.parentId = 0;

        /**
         * LoginResponse ip.
         * @member {string} ip
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.ip = "";

        /**
         * LoginResponse location.
         * @member {string} location
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.location = "";

        /**
         * LoginResponse iosReview.
         * @member {boolean} iosReview
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.iosReview = false;

        /**
         * LoginResponse isBlack.
         * @member {boolean} isBlack
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.isBlack = false;

        /**
         * LoginResponse notice.
         * @member {string} notice
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.notice = "";

        /**
         * LoginResponse shareUrl.
         * @member {string} shareUrl
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.shareUrl = "";

        /**
         * LoginResponse nonMemberRecharge.
         * @member {boolean} nonMemberRecharge
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.nonMemberRecharge = false;

        /**
         * LoginResponse userDomain.
         * @member {protoLogin.IUserDomain|null|undefined} userDomain
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.userDomain = null;

        /**
         * LoginResponse userBaseInfo.
         * @member {protoLogin.IUserBaseInfo|null|undefined} userBaseInfo
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.userBaseInfo = null;

        /**
         * LoginResponse userCoin.
         * @member {protoLogin.IUserCurrencyInfo|null|undefined} userCoin
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.userCoin = null;

        /**
         * LoginResponse reconnectionInfo.
         * @member {protoLogin.IReconnectionInfo|null|undefined} reconnectionInfo
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.reconnectionInfo = null;

        /**
         * LoginResponse userSocial.
         * @member {protoLogin.IUserSocial|null|undefined} userSocial
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.userSocial = null;

        /**
         * LoginResponse isFlag.
         * @member {number} isFlag
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.isFlag = 0;

        /**
         * LoginResponse announcements.
         * @member {string} announcements
         * @memberof protoLogin.LoginResponse
         * @instance
         */
        LoginResponse.prototype.announcements = "";

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof protoLogin.LoginResponse
         * @static
         * @param {protoLogin.ILoginResponse=} [properties] Properties to set
         * @returns {protoLogin.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link protoLogin.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof protoLogin.LoginResponse
         * @static
         * @param {protoLogin.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.openId != null && Object.hasOwnProperty.call(message, "openId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.openId);
            if (message.sessionKey != null && Object.hasOwnProperty.call(message, "sessionKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.sessionKey);
            if (message.invitation != null && Object.hasOwnProperty.call(message, "invitation"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.invitation);
            if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.parentId);
            if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ip);
            if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.location);
            if (message.iosReview != null && Object.hasOwnProperty.call(message, "iosReview"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.iosReview);
            if (message.isBlack != null && Object.hasOwnProperty.call(message, "isBlack"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isBlack);
            if (message.notice != null && Object.hasOwnProperty.call(message, "notice"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.notice);
            if (message.shareUrl != null && Object.hasOwnProperty.call(message, "shareUrl"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.shareUrl);
            if (message.nonMemberRecharge != null && Object.hasOwnProperty.call(message, "nonMemberRecharge"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.nonMemberRecharge);
            if (message.userDomain != null && Object.hasOwnProperty.call(message, "userDomain"))
                $root.protoLogin.UserDomain.encode(message.userDomain, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.userBaseInfo != null && Object.hasOwnProperty.call(message, "userBaseInfo"))
                $root.protoLogin.UserBaseInfo.encode(message.userBaseInfo, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.userCoin != null && Object.hasOwnProperty.call(message, "userCoin"))
                $root.protoLogin.UserCurrencyInfo.encode(message.userCoin, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.reconnectionInfo != null && Object.hasOwnProperty.call(message, "reconnectionInfo"))
                $root.protoLogin.ReconnectionInfo.encode(message.reconnectionInfo, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.userSocial != null && Object.hasOwnProperty.call(message, "userSocial"))
                $root.protoLogin.UserSocial.encode(message.userSocial, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.isFlag != null && Object.hasOwnProperty.call(message, "isFlag"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.isFlag);
            if (message.announcements != null && Object.hasOwnProperty.call(message, "announcements"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.announcements);
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link protoLogin.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoLogin.LoginResponse
         * @static
         * @param {protoLogin.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protoLogin.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoLogin.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoLogin.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.openId = reader.string();
                    break;
                case 3:
                    message.sessionKey = reader.string();
                    break;
                case 4:
                    message.invitation = reader.uint32();
                    break;
                case 5:
                    message.parentId = reader.uint32();
                    break;
                case 6:
                    message.ip = reader.string();
                    break;
                case 7:
                    message.location = reader.string();
                    break;
                case 8:
                    message.iosReview = reader.bool();
                    break;
                case 9:
                    message.isBlack = reader.bool();
                    break;
                case 10:
                    message.notice = reader.string();
                    break;
                case 11:
                    message.shareUrl = reader.string();
                    break;
                case 12:
                    message.nonMemberRecharge = reader.bool();
                    break;
                case 13:
                    message.userDomain = $root.protoLogin.UserDomain.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.userBaseInfo = $root.protoLogin.UserBaseInfo.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.userCoin = $root.protoLogin.UserCurrencyInfo.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.reconnectionInfo = $root.protoLogin.ReconnectionInfo.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.userSocial = $root.protoLogin.UserSocial.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.isFlag = reader.uint32();
                    break;
                case 19:
                    message.announcements = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoLogin.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoLogin.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof protoLogin.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.openId != null && message.hasOwnProperty("openId"))
                if (!$util.isString(message.openId))
                    return "openId: string expected";
            if (message.sessionKey != null && message.hasOwnProperty("sessionKey"))
                if (!$util.isString(message.sessionKey))
                    return "sessionKey: string expected";
            if (message.invitation != null && message.hasOwnProperty("invitation"))
                if (!$util.isInteger(message.invitation))
                    return "invitation: integer expected";
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (!$util.isInteger(message.parentId))
                    return "parentId: integer expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.location != null && message.hasOwnProperty("location"))
                if (!$util.isString(message.location))
                    return "location: string expected";
            if (message.iosReview != null && message.hasOwnProperty("iosReview"))
                if (typeof message.iosReview !== "boolean")
                    return "iosReview: boolean expected";
            if (message.isBlack != null && message.hasOwnProperty("isBlack"))
                if (typeof message.isBlack !== "boolean")
                    return "isBlack: boolean expected";
            if (message.notice != null && message.hasOwnProperty("notice"))
                if (!$util.isString(message.notice))
                    return "notice: string expected";
            if (message.shareUrl != null && message.hasOwnProperty("shareUrl"))
                if (!$util.isString(message.shareUrl))
                    return "shareUrl: string expected";
            if (message.nonMemberRecharge != null && message.hasOwnProperty("nonMemberRecharge"))
                if (typeof message.nonMemberRecharge !== "boolean")
                    return "nonMemberRecharge: boolean expected";
            if (message.userDomain != null && message.hasOwnProperty("userDomain")) {
                var error = $root.protoLogin.UserDomain.verify(message.userDomain);
                if (error)
                    return "userDomain." + error;
            }
            if (message.userBaseInfo != null && message.hasOwnProperty("userBaseInfo")) {
                var error = $root.protoLogin.UserBaseInfo.verify(message.userBaseInfo);
                if (error)
                    return "userBaseInfo." + error;
            }
            if (message.userCoin != null && message.hasOwnProperty("userCoin")) {
                var error = $root.protoLogin.UserCurrencyInfo.verify(message.userCoin);
                if (error)
                    return "userCoin." + error;
            }
            if (message.reconnectionInfo != null && message.hasOwnProperty("reconnectionInfo")) {
                var error = $root.protoLogin.ReconnectionInfo.verify(message.reconnectionInfo);
                if (error)
                    return "reconnectionInfo." + error;
            }
            if (message.userSocial != null && message.hasOwnProperty("userSocial")) {
                var error = $root.protoLogin.UserSocial.verify(message.userSocial);
                if (error)
                    return "userSocial." + error;
            }
            if (message.isFlag != null && message.hasOwnProperty("isFlag"))
                if (!$util.isInteger(message.isFlag))
                    return "isFlag: integer expected";
            if (message.announcements != null && message.hasOwnProperty("announcements"))
                if (!$util.isString(message.announcements))
                    return "announcements: string expected";
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoLogin.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoLogin.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protoLogin.LoginResponse)
                return object;
            var message = new $root.protoLogin.LoginResponse();
            if (object.code != null)
                message.code = object.code >>> 0;
            if (object.openId != null)
                message.openId = String(object.openId);
            if (object.sessionKey != null)
                message.sessionKey = String(object.sessionKey);
            if (object.invitation != null)
                message.invitation = object.invitation >>> 0;
            if (object.parentId != null)
                message.parentId = object.parentId >>> 0;
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.location != null)
                message.location = String(object.location);
            if (object.iosReview != null)
                message.iosReview = Boolean(object.iosReview);
            if (object.isBlack != null)
                message.isBlack = Boolean(object.isBlack);
            if (object.notice != null)
                message.notice = String(object.notice);
            if (object.shareUrl != null)
                message.shareUrl = String(object.shareUrl);
            if (object.nonMemberRecharge != null)
                message.nonMemberRecharge = Boolean(object.nonMemberRecharge);
            if (object.userDomain != null) {
                if (typeof object.userDomain !== "object")
                    throw TypeError(".protoLogin.LoginResponse.userDomain: object expected");
                message.userDomain = $root.protoLogin.UserDomain.fromObject(object.userDomain);
            }
            if (object.userBaseInfo != null) {
                if (typeof object.userBaseInfo !== "object")
                    throw TypeError(".protoLogin.LoginResponse.userBaseInfo: object expected");
                message.userBaseInfo = $root.protoLogin.UserBaseInfo.fromObject(object.userBaseInfo);
            }
            if (object.userCoin != null) {
                if (typeof object.userCoin !== "object")
                    throw TypeError(".protoLogin.LoginResponse.userCoin: object expected");
                message.userCoin = $root.protoLogin.UserCurrencyInfo.fromObject(object.userCoin);
            }
            if (object.reconnectionInfo != null) {
                if (typeof object.reconnectionInfo !== "object")
                    throw TypeError(".protoLogin.LoginResponse.reconnectionInfo: object expected");
                message.reconnectionInfo = $root.protoLogin.ReconnectionInfo.fromObject(object.reconnectionInfo);
            }
            if (object.userSocial != null) {
                if (typeof object.userSocial !== "object")
                    throw TypeError(".protoLogin.LoginResponse.userSocial: object expected");
                message.userSocial = $root.protoLogin.UserSocial.fromObject(object.userSocial);
            }
            if (object.isFlag != null)
                message.isFlag = object.isFlag >>> 0;
            if (object.announcements != null)
                message.announcements = String(object.announcements);
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoLogin.LoginResponse
         * @static
         * @param {protoLogin.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.openId = "";
                object.sessionKey = "";
                object.invitation = 0;
                object.parentId = 0;
                object.ip = "";
                object.location = "";
                object.iosReview = false;
                object.isBlack = false;
                object.notice = "";
                object.shareUrl = "";
                object.nonMemberRecharge = false;
                object.userDomain = null;
                object.userBaseInfo = null;
                object.userCoin = null;
                object.reconnectionInfo = null;
                object.userSocial = null;
                object.isFlag = 0;
                object.announcements = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.openId != null && message.hasOwnProperty("openId"))
                object.openId = message.openId;
            if (message.sessionKey != null && message.hasOwnProperty("sessionKey"))
                object.sessionKey = message.sessionKey;
            if (message.invitation != null && message.hasOwnProperty("invitation"))
                object.invitation = message.invitation;
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                object.parentId = message.parentId;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = message.location;
            if (message.iosReview != null && message.hasOwnProperty("iosReview"))
                object.iosReview = message.iosReview;
            if (message.isBlack != null && message.hasOwnProperty("isBlack"))
                object.isBlack = message.isBlack;
            if (message.notice != null && message.hasOwnProperty("notice"))
                object.notice = message.notice;
            if (message.shareUrl != null && message.hasOwnProperty("shareUrl"))
                object.shareUrl = message.shareUrl;
            if (message.nonMemberRecharge != null && message.hasOwnProperty("nonMemberRecharge"))
                object.nonMemberRecharge = message.nonMemberRecharge;
            if (message.userDomain != null && message.hasOwnProperty("userDomain"))
                object.userDomain = $root.protoLogin.UserDomain.toObject(message.userDomain, options);
            if (message.userBaseInfo != null && message.hasOwnProperty("userBaseInfo"))
                object.userBaseInfo = $root.protoLogin.UserBaseInfo.toObject(message.userBaseInfo, options);
            if (message.userCoin != null && message.hasOwnProperty("userCoin"))
                object.userCoin = $root.protoLogin.UserCurrencyInfo.toObject(message.userCoin, options);
            if (message.reconnectionInfo != null && message.hasOwnProperty("reconnectionInfo"))
                object.reconnectionInfo = $root.protoLogin.ReconnectionInfo.toObject(message.reconnectionInfo, options);
            if (message.userSocial != null && message.hasOwnProperty("userSocial"))
                object.userSocial = $root.protoLogin.UserSocial.toObject(message.userSocial, options);
            if (message.isFlag != null && message.hasOwnProperty("isFlag"))
                object.isFlag = message.isFlag;
            if (message.announcements != null && message.hasOwnProperty("announcements"))
                object.announcements = message.announcements;
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof protoLogin.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResponse;
    })();

    protoLogin.RoomCreateRequest = (function() {

        /**
         * Properties of a RoomCreateRequest.
         * @memberof protoLogin
         * @interface IRoomCreateRequest
         * @property {number|null} [appId] RoomCreateRequest appId
         * @property {number|null} [gameId] RoomCreateRequest gameId
         * @property {string|null} [userId] RoomCreateRequest userId
         * @property {string|null} [deviceId] RoomCreateRequest deviceId
         * @property {number|null} [maxRounds] RoomCreateRequest maxRounds
         * @property {string|null} [roomConfig] RoomCreateRequest roomConfig
         * @property {string|null} [coreVersion] RoomCreateRequest coreVersion
         * @property {number|null} [clubId] RoomCreateRequest clubId
         * @property {number|null} [clubRoomType] RoomCreateRequest clubRoomType
         */

        /**
         * Constructs a new RoomCreateRequest.
         * @memberof protoLogin
         * @classdesc Represents a RoomCreateRequest.
         * @implements IRoomCreateRequest
         * @constructor
         * @param {protoLogin.IRoomCreateRequest=} [properties] Properties to set
         */
        function RoomCreateRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomCreateRequest appId.
         * @member {number} appId
         * @memberof protoLogin.RoomCreateRequest
         * @instance
         */
        RoomCreateRequest.prototype.appId = 0;

        /**
         * RoomCreateRequest gameId.
         * @member {number} gameId
         * @memberof protoLogin.RoomCreateRequest
         * @instance
         */
        RoomCreateRequest.prototype.gameId = 0;

        /**
         * RoomCreateRequest userId.
         * @member {string} userId
         * @memberof protoLogin.RoomCreateRequest
         * @instance
         */
        RoomCreateRequest.prototype.userId = "";

        /**
         * RoomCreateRequest deviceId.
         * @member {string} deviceId
         * @memberof protoLogin.RoomCreateRequest
         * @instance
         */
        RoomCreateRequest.prototype.deviceId = "";

        /**
         * RoomCreateRequest maxRounds.
         * @member {number} maxRounds
         * @memberof protoLogin.RoomCreateRequest
         * @instance
         */
        RoomCreateRequest.prototype.maxRounds = 0;

        /**
         * RoomCreateRequest roomConfig.
         * @member {string} roomConfig
         * @memberof protoLogin.RoomCreateRequest
         * @instance
         */
        RoomCreateRequest.prototype.roomConfig = "";

        /**
         * RoomCreateRequest coreVersion.
         * @member {string} coreVersion
         * @memberof protoLogin.RoomCreateRequest
         * @instance
         */
        RoomCreateRequest.prototype.coreVersion = "";

        /**
         * RoomCreateRequest clubId.
         * @member {number} clubId
         * @memberof protoLogin.RoomCreateRequest
         * @instance
         */
        RoomCreateRequest.prototype.clubId = 0;

        /**
         * RoomCreateRequest clubRoomType.
         * @member {number} clubRoomType
         * @memberof protoLogin.RoomCreateRequest
         * @instance
         */
        RoomCreateRequest.prototype.clubRoomType = 0;

        /**
         * Creates a new RoomCreateRequest instance using the specified properties.
         * @function create
         * @memberof protoLogin.RoomCreateRequest
         * @static
         * @param {protoLogin.IRoomCreateRequest=} [properties] Properties to set
         * @returns {protoLogin.RoomCreateRequest} RoomCreateRequest instance
         */
        RoomCreateRequest.create = function create(properties) {
            return new RoomCreateRequest(properties);
        };

        /**
         * Encodes the specified RoomCreateRequest message. Does not implicitly {@link protoLogin.RoomCreateRequest.verify|verify} messages.
         * @function encode
         * @memberof protoLogin.RoomCreateRequest
         * @static
         * @param {protoLogin.IRoomCreateRequest} message RoomCreateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomCreateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.appId);
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gameId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceId);
            if (message.maxRounds != null && Object.hasOwnProperty.call(message, "maxRounds"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.maxRounds);
            if (message.roomConfig != null && Object.hasOwnProperty.call(message, "roomConfig"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.roomConfig);
            if (message.coreVersion != null && Object.hasOwnProperty.call(message, "coreVersion"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.coreVersion);
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.clubId);
            if (message.clubRoomType != null && Object.hasOwnProperty.call(message, "clubRoomType"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.clubRoomType);
            return writer;
        };

        /**
         * Encodes the specified RoomCreateRequest message, length delimited. Does not implicitly {@link protoLogin.RoomCreateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoLogin.RoomCreateRequest
         * @static
         * @param {protoLogin.IRoomCreateRequest} message RoomCreateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomCreateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomCreateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protoLogin.RoomCreateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoLogin.RoomCreateRequest} RoomCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomCreateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoLogin.RoomCreateRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appId = reader.int32();
                    break;
                case 2:
                    message.gameId = reader.int32();
                    break;
                case 3:
                    message.userId = reader.string();
                    break;
                case 4:
                    message.deviceId = reader.string();
                    break;
                case 5:
                    message.maxRounds = reader.uint32();
                    break;
                case 6:
                    message.roomConfig = reader.string();
                    break;
                case 7:
                    message.coreVersion = reader.string();
                    break;
                case 8:
                    message.clubId = reader.uint32();
                    break;
                case 9:
                    message.clubRoomType = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomCreateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoLogin.RoomCreateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoLogin.RoomCreateRequest} RoomCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomCreateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomCreateRequest message.
         * @function verify
         * @memberof protoLogin.RoomCreateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomCreateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isInteger(message.appId))
                    return "appId: integer expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.maxRounds != null && message.hasOwnProperty("maxRounds"))
                if (!$util.isInteger(message.maxRounds))
                    return "maxRounds: integer expected";
            if (message.roomConfig != null && message.hasOwnProperty("roomConfig"))
                if (!$util.isString(message.roomConfig))
                    return "roomConfig: string expected";
            if (message.coreVersion != null && message.hasOwnProperty("coreVersion"))
                if (!$util.isString(message.coreVersion))
                    return "coreVersion: string expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            if (message.clubRoomType != null && message.hasOwnProperty("clubRoomType"))
                if (!$util.isInteger(message.clubRoomType))
                    return "clubRoomType: integer expected";
            return null;
        };

        /**
         * Creates a RoomCreateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoLogin.RoomCreateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoLogin.RoomCreateRequest} RoomCreateRequest
         */
        RoomCreateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protoLogin.RoomCreateRequest)
                return object;
            var message = new $root.protoLogin.RoomCreateRequest();
            if (object.appId != null)
                message.appId = object.appId | 0;
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.maxRounds != null)
                message.maxRounds = object.maxRounds >>> 0;
            if (object.roomConfig != null)
                message.roomConfig = String(object.roomConfig);
            if (object.coreVersion != null)
                message.coreVersion = String(object.coreVersion);
            if (object.clubId != null)
                message.clubId = object.clubId >>> 0;
            if (object.clubRoomType != null)
                message.clubRoomType = object.clubRoomType >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RoomCreateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoLogin.RoomCreateRequest
         * @static
         * @param {protoLogin.RoomCreateRequest} message RoomCreateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomCreateRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appId = 0;
                object.gameId = 0;
                object.userId = "";
                object.deviceId = "";
                object.maxRounds = 0;
                object.roomConfig = "";
                object.coreVersion = "";
                object.clubId = 0;
                object.clubRoomType = 0;
            }
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.maxRounds != null && message.hasOwnProperty("maxRounds"))
                object.maxRounds = message.maxRounds;
            if (message.roomConfig != null && message.hasOwnProperty("roomConfig"))
                object.roomConfig = message.roomConfig;
            if (message.coreVersion != null && message.hasOwnProperty("coreVersion"))
                object.coreVersion = message.coreVersion;
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                object.clubId = message.clubId;
            if (message.clubRoomType != null && message.hasOwnProperty("clubRoomType"))
                object.clubRoomType = message.clubRoomType;
            return object;
        };

        /**
         * Converts this RoomCreateRequest to JSON.
         * @function toJSON
         * @memberof protoLogin.RoomCreateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomCreateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomCreateRequest;
    })();

    protoLogin.RoomCreateResponse = (function() {

        /**
         * Properties of a RoomCreateResponse.
         * @memberof protoLogin
         * @interface IRoomCreateResponse
         * @property {number|null} [code] RoomCreateResponse code
         * @property {number|null} [roomId] RoomCreateResponse roomId
         * @property {string|null} [serverIp] RoomCreateResponse serverIp
         * @property {string|null} [serverPort] RoomCreateResponse serverPort
         * @property {number|null} [payGold] RoomCreateResponse payGold
         */

        /**
         * Constructs a new RoomCreateResponse.
         * @memberof protoLogin
         * @classdesc Represents a RoomCreateResponse.
         * @implements IRoomCreateResponse
         * @constructor
         * @param {protoLogin.IRoomCreateResponse=} [properties] Properties to set
         */
        function RoomCreateResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomCreateResponse code.
         * @member {number} code
         * @memberof protoLogin.RoomCreateResponse
         * @instance
         */
        RoomCreateResponse.prototype.code = 0;

        /**
         * RoomCreateResponse roomId.
         * @member {number} roomId
         * @memberof protoLogin.RoomCreateResponse
         * @instance
         */
        RoomCreateResponse.prototype.roomId = 0;

        /**
         * RoomCreateResponse serverIp.
         * @member {string} serverIp
         * @memberof protoLogin.RoomCreateResponse
         * @instance
         */
        RoomCreateResponse.prototype.serverIp = "";

        /**
         * RoomCreateResponse serverPort.
         * @member {string} serverPort
         * @memberof protoLogin.RoomCreateResponse
         * @instance
         */
        RoomCreateResponse.prototype.serverPort = "";

        /**
         * RoomCreateResponse payGold.
         * @member {number} payGold
         * @memberof protoLogin.RoomCreateResponse
         * @instance
         */
        RoomCreateResponse.prototype.payGold = 0;

        /**
         * Creates a new RoomCreateResponse instance using the specified properties.
         * @function create
         * @memberof protoLogin.RoomCreateResponse
         * @static
         * @param {protoLogin.IRoomCreateResponse=} [properties] Properties to set
         * @returns {protoLogin.RoomCreateResponse} RoomCreateResponse instance
         */
        RoomCreateResponse.create = function create(properties) {
            return new RoomCreateResponse(properties);
        };

        /**
         * Encodes the specified RoomCreateResponse message. Does not implicitly {@link protoLogin.RoomCreateResponse.verify|verify} messages.
         * @function encode
         * @memberof protoLogin.RoomCreateResponse
         * @static
         * @param {protoLogin.IRoomCreateResponse} message RoomCreateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomCreateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roomId);
            if (message.serverIp != null && Object.hasOwnProperty.call(message, "serverIp"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.serverIp);
            if (message.serverPort != null && Object.hasOwnProperty.call(message, "serverPort"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.serverPort);
            if (message.payGold != null && Object.hasOwnProperty.call(message, "payGold"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.payGold);
            return writer;
        };

        /**
         * Encodes the specified RoomCreateResponse message, length delimited. Does not implicitly {@link protoLogin.RoomCreateResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protoLogin.RoomCreateResponse
         * @static
         * @param {protoLogin.IRoomCreateResponse} message RoomCreateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomCreateResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomCreateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protoLogin.RoomCreateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protoLogin.RoomCreateResponse} RoomCreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomCreateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protoLogin.RoomCreateResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.roomId = reader.int32();
                    break;
                case 3:
                    message.serverIp = reader.string();
                    break;
                case 4:
                    message.serverPort = reader.string();
                    break;
                case 5:
                    message.payGold = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomCreateResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protoLogin.RoomCreateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protoLogin.RoomCreateResponse} RoomCreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomCreateResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomCreateResponse message.
         * @function verify
         * @memberof protoLogin.RoomCreateResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomCreateResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            if (message.serverIp != null && message.hasOwnProperty("serverIp"))
                if (!$util.isString(message.serverIp))
                    return "serverIp: string expected";
            if (message.serverPort != null && message.hasOwnProperty("serverPort"))
                if (!$util.isString(message.serverPort))
                    return "serverPort: string expected";
            if (message.payGold != null && message.hasOwnProperty("payGold"))
                if (!$util.isInteger(message.payGold))
                    return "payGold: integer expected";
            return null;
        };

        /**
         * Creates a RoomCreateResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protoLogin.RoomCreateResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protoLogin.RoomCreateResponse} RoomCreateResponse
         */
        RoomCreateResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protoLogin.RoomCreateResponse)
                return object;
            var message = new $root.protoLogin.RoomCreateResponse();
            if (object.code != null)
                message.code = object.code >>> 0;
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            if (object.serverIp != null)
                message.serverIp = String(object.serverIp);
            if (object.serverPort != null)
                message.serverPort = String(object.serverPort);
            if (object.payGold != null)
                message.payGold = object.payGold | 0;
            return message;
        };

        /**
         * Creates a plain object from a RoomCreateResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protoLogin.RoomCreateResponse
         * @static
         * @param {protoLogin.RoomCreateResponse} message RoomCreateResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomCreateResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.roomId = 0;
                object.serverIp = "";
                object.serverPort = "";
                object.payGold = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.serverIp != null && message.hasOwnProperty("serverIp"))
                object.serverIp = message.serverIp;
            if (message.serverPort != null && message.hasOwnProperty("serverPort"))
                object.serverPort = message.serverPort;
            if (message.payGold != null && message.hasOwnProperty("payGold"))
                object.payGold = message.payGold;
            return object;
        };

        /**
         * Converts this RoomCreateResponse to JSON.
         * @function toJSON
         * @memberof protoLogin.RoomCreateResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomCreateResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomCreateResponse;
    })();

    return protoLogin;
})();

module.exports = $root;
