import * as $protobuf from "protobufjs";
/** Namespace protoLogin. */
export namespace protoLogin {

    /** Properties of a UserBaseInfo. */
    interface IUserBaseInfo {

        /** UserBaseInfo aid */
        aid?: (number|null);

        /** UserBaseInfo uid */
        uid?: (string|null);

        /** UserBaseInfo avatarUrl */
        avatarUrl?: (string|null);

        /** UserBaseInfo userNick */
        userNick?: (string|null);

        /** UserBaseInfo role */
        role?: (number|null);

        /** UserBaseInfo state */
        state?: (number|null);

        /** UserBaseInfo permissions */
        permissions?: (string|null);

        /** UserBaseInfo groupid */
        groupid?: (number|null);

        /** UserBaseInfo groupname */
        groupname?: (string|null);

        /** UserBaseInfo score */
        score?: (number|null);
    }

    /** Represents a UserBaseInfo. */
    class UserBaseInfo implements IUserBaseInfo {

        /**
         * Constructs a new UserBaseInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoLogin.IUserBaseInfo);

        /** UserBaseInfo aid. */
        public aid: number;

        /** UserBaseInfo uid. */
        public uid: string;

        /** UserBaseInfo avatarUrl. */
        public avatarUrl: string;

        /** UserBaseInfo userNick. */
        public userNick: string;

        /** UserBaseInfo role. */
        public role: number;

        /** UserBaseInfo state. */
        public state: number;

        /** UserBaseInfo permissions. */
        public permissions: string;

        /** UserBaseInfo groupid. */
        public groupid: number;

        /** UserBaseInfo groupname. */
        public groupname: string;

        /** UserBaseInfo score. */
        public score: number;

        /**
         * Creates a new UserBaseInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserBaseInfo instance
         */
        public static create(properties?: protoLogin.IUserBaseInfo): protoLogin.UserBaseInfo;

        /**
         * Encodes the specified UserBaseInfo message. Does not implicitly {@link protoLogin.UserBaseInfo.verify|verify} messages.
         * @param message UserBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoLogin.IUserBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserBaseInfo message, length delimited. Does not implicitly {@link protoLogin.UserBaseInfo.verify|verify} messages.
         * @param message UserBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoLogin.IUserBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserBaseInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoLogin.UserBaseInfo;

        /**
         * Decodes a UserBaseInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoLogin.UserBaseInfo;

        /**
         * Verifies a UserBaseInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserBaseInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserBaseInfo
         */
        public static fromObject(object: { [k: string]: any }): protoLogin.UserBaseInfo;

        /**
         * Creates a plain object from a UserBaseInfo message. Also converts values to other types if specified.
         * @param message UserBaseInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoLogin.UserBaseInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserBaseInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserDomain. */
    interface IUserDomain {

        /** UserDomain update */
        update?: (string|null);

        /** UserDomain login */
        login?: (string|null);

        /** UserDomain pay */
        pay?: (string|null);
    }

    /** Represents a UserDomain. */
    class UserDomain implements IUserDomain {

        /**
         * Constructs a new UserDomain.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoLogin.IUserDomain);

        /** UserDomain update. */
        public update: string;

        /** UserDomain login. */
        public login: string;

        /** UserDomain pay. */
        public pay: string;

        /**
         * Creates a new UserDomain instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserDomain instance
         */
        public static create(properties?: protoLogin.IUserDomain): protoLogin.UserDomain;

        /**
         * Encodes the specified UserDomain message. Does not implicitly {@link protoLogin.UserDomain.verify|verify} messages.
         * @param message UserDomain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoLogin.IUserDomain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserDomain message, length delimited. Does not implicitly {@link protoLogin.UserDomain.verify|verify} messages.
         * @param message UserDomain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoLogin.IUserDomain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserDomain message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserDomain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoLogin.UserDomain;

        /**
         * Decodes a UserDomain message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserDomain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoLogin.UserDomain;

        /**
         * Verifies a UserDomain message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserDomain message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserDomain
         */
        public static fromObject(object: { [k: string]: any }): protoLogin.UserDomain;

        /**
         * Creates a plain object from a UserDomain message. Also converts values to other types if specified.
         * @param message UserDomain
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoLogin.UserDomain, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserDomain to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserCurrencyInfo. */
    interface IUserCurrencyInfo {

        /** UserCurrencyInfo coin */
        coin?: (number|null);

        /** UserCurrencyInfo gold */
        gold?: (number|null);

        /** UserCurrencyInfo diamond */
        diamond?: (number|null);
    }

    /** Represents a UserCurrencyInfo. */
    class UserCurrencyInfo implements IUserCurrencyInfo {

        /**
         * Constructs a new UserCurrencyInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoLogin.IUserCurrencyInfo);

        /** UserCurrencyInfo coin. */
        public coin: number;

        /** UserCurrencyInfo gold. */
        public gold: number;

        /** UserCurrencyInfo diamond. */
        public diamond: number;

        /**
         * Creates a new UserCurrencyInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserCurrencyInfo instance
         */
        public static create(properties?: protoLogin.IUserCurrencyInfo): protoLogin.UserCurrencyInfo;

        /**
         * Encodes the specified UserCurrencyInfo message. Does not implicitly {@link protoLogin.UserCurrencyInfo.verify|verify} messages.
         * @param message UserCurrencyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoLogin.IUserCurrencyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserCurrencyInfo message, length delimited. Does not implicitly {@link protoLogin.UserCurrencyInfo.verify|verify} messages.
         * @param message UserCurrencyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoLogin.IUserCurrencyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserCurrencyInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserCurrencyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoLogin.UserCurrencyInfo;

        /**
         * Decodes a UserCurrencyInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserCurrencyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoLogin.UserCurrencyInfo;

        /**
         * Verifies a UserCurrencyInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserCurrencyInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserCurrencyInfo
         */
        public static fromObject(object: { [k: string]: any }): protoLogin.UserCurrencyInfo;

        /**
         * Creates a plain object from a UserCurrencyInfo message. Also converts values to other types if specified.
         * @param message UserCurrencyInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoLogin.UserCurrencyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserCurrencyInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReconnectionInfo. */
    interface IReconnectionInfo {

        /** ReconnectionInfo state */
        state?: (boolean|null);

        /** ReconnectionInfo roomId */
        roomId?: (number|null);

        /** ReconnectionInfo gameId */
        gameId?: (number|null);

        /** ReconnectionInfo serverIp */
        serverIp?: (string|null);

        /** ReconnectionInfo serverPort */
        serverPort?: (number|null);
    }

    /** Represents a ReconnectionInfo. */
    class ReconnectionInfo implements IReconnectionInfo {

        /**
         * Constructs a new ReconnectionInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoLogin.IReconnectionInfo);

        /** ReconnectionInfo state. */
        public state: boolean;

        /** ReconnectionInfo roomId. */
        public roomId: number;

        /** ReconnectionInfo gameId. */
        public gameId: number;

        /** ReconnectionInfo serverIp. */
        public serverIp: string;

        /** ReconnectionInfo serverPort. */
        public serverPort: number;

        /**
         * Creates a new ReconnectionInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReconnectionInfo instance
         */
        public static create(properties?: protoLogin.IReconnectionInfo): protoLogin.ReconnectionInfo;

        /**
         * Encodes the specified ReconnectionInfo message. Does not implicitly {@link protoLogin.ReconnectionInfo.verify|verify} messages.
         * @param message ReconnectionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoLogin.IReconnectionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReconnectionInfo message, length delimited. Does not implicitly {@link protoLogin.ReconnectionInfo.verify|verify} messages.
         * @param message ReconnectionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoLogin.IReconnectionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReconnectionInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReconnectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoLogin.ReconnectionInfo;

        /**
         * Decodes a ReconnectionInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReconnectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoLogin.ReconnectionInfo;

        /**
         * Verifies a ReconnectionInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReconnectionInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReconnectionInfo
         */
        public static fromObject(object: { [k: string]: any }): protoLogin.ReconnectionInfo;

        /**
         * Creates a plain object from a ReconnectionInfo message. Also converts values to other types if specified.
         * @param message ReconnectionInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoLogin.ReconnectionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReconnectionInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserSocial. */
    interface IUserSocial {

        /** UserSocial gender */
        gender?: (number|null);

        /** UserSocial round */
        round?: (number|null);

        /** UserSocial regTime */
        regTime?: (number|null);

        /** UserSocial grade */
        grade?: (number|null);
    }

    /** Represents a UserSocial. */
    class UserSocial implements IUserSocial {

        /**
         * Constructs a new UserSocial.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoLogin.IUserSocial);

        /** UserSocial gender. */
        public gender: number;

        /** UserSocial round. */
        public round: number;

        /** UserSocial regTime. */
        public regTime: number;

        /** UserSocial grade. */
        public grade: number;

        /**
         * Creates a new UserSocial instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserSocial instance
         */
        public static create(properties?: protoLogin.IUserSocial): protoLogin.UserSocial;

        /**
         * Encodes the specified UserSocial message. Does not implicitly {@link protoLogin.UserSocial.verify|verify} messages.
         * @param message UserSocial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoLogin.IUserSocial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserSocial message, length delimited. Does not implicitly {@link protoLogin.UserSocial.verify|verify} messages.
         * @param message UserSocial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoLogin.IUserSocial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserSocial message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSocial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoLogin.UserSocial;

        /**
         * Decodes a UserSocial message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserSocial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoLogin.UserSocial;

        /**
         * Verifies a UserSocial message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserSocial message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserSocial
         */
        public static fromObject(object: { [k: string]: any }): protoLogin.UserSocial;

        /**
         * Creates a plain object from a UserSocial message. Also converts values to other types if specified.
         * @param message UserSocial
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoLogin.UserSocial, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserSocial to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest openId */
        openId?: (string|null);

        /** LoginRequest channel */
        channel?: (number|null);

        /** LoginRequest appId */
        appId?: (number|null);

        /** LoginRequest deviceId */
        deviceId?: (string|null);

        /** LoginRequest verId */
        verId?: (string|null);

        /** LoginRequest location */
        location?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoLogin.ILoginRequest);

        /** LoginRequest openId. */
        public openId: string;

        /** LoginRequest channel. */
        public channel: number;

        /** LoginRequest appId. */
        public appId: number;

        /** LoginRequest deviceId. */
        public deviceId: string;

        /** LoginRequest verId. */
        public verId: string;

        /** LoginRequest location. */
        public location: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: protoLogin.ILoginRequest): protoLogin.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link protoLogin.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoLogin.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link protoLogin.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoLogin.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoLogin.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoLogin.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): protoLogin.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoLogin.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse code */
        code?: (number|null);

        /** LoginResponse openId */
        openId?: (string|null);

        /** LoginResponse sessionKey */
        sessionKey?: (string|null);

        /** LoginResponse invitation */
        invitation?: (number|null);

        /** LoginResponse parentId */
        parentId?: (number|null);

        /** LoginResponse ip */
        ip?: (string|null);

        /** LoginResponse location */
        location?: (string|null);

        /** LoginResponse iosReview */
        iosReview?: (boolean|null);

        /** LoginResponse isBlack */
        isBlack?: (boolean|null);

        /** LoginResponse notice */
        notice?: (string|null);

        /** LoginResponse shareUrl */
        shareUrl?: (string|null);

        /** LoginResponse nonMemberRecharge */
        nonMemberRecharge?: (boolean|null);

        /** LoginResponse userDomain */
        userDomain?: (protoLogin.IUserDomain|null);

        /** LoginResponse userBaseInfo */
        userBaseInfo?: (protoLogin.IUserBaseInfo|null);

        /** LoginResponse userCoin */
        userCoin?: (protoLogin.IUserCurrencyInfo|null);

        /** LoginResponse reconnectionInfo */
        reconnectionInfo?: (protoLogin.IReconnectionInfo|null);

        /** LoginResponse userSocial */
        userSocial?: (protoLogin.IUserSocial|null);

        /** LoginResponse isFlag */
        isFlag?: (number|null);

        /** LoginResponse announcements */
        announcements?: (string|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoLogin.ILoginResponse);

        /** LoginResponse code. */
        public code: number;

        /** LoginResponse openId. */
        public openId: string;

        /** LoginResponse sessionKey. */
        public sessionKey: string;

        /** LoginResponse invitation. */
        public invitation: number;

        /** LoginResponse parentId. */
        public parentId: number;

        /** LoginResponse ip. */
        public ip: string;

        /** LoginResponse location. */
        public location: string;

        /** LoginResponse iosReview. */
        public iosReview: boolean;

        /** LoginResponse isBlack. */
        public isBlack: boolean;

        /** LoginResponse notice. */
        public notice: string;

        /** LoginResponse shareUrl. */
        public shareUrl: string;

        /** LoginResponse nonMemberRecharge. */
        public nonMemberRecharge: boolean;

        /** LoginResponse userDomain. */
        public userDomain?: (protoLogin.IUserDomain|null);

        /** LoginResponse userBaseInfo. */
        public userBaseInfo?: (protoLogin.IUserBaseInfo|null);

        /** LoginResponse userCoin. */
        public userCoin?: (protoLogin.IUserCurrencyInfo|null);

        /** LoginResponse reconnectionInfo. */
        public reconnectionInfo?: (protoLogin.IReconnectionInfo|null);

        /** LoginResponse userSocial. */
        public userSocial?: (protoLogin.IUserSocial|null);

        /** LoginResponse isFlag. */
        public isFlag: number;

        /** LoginResponse announcements. */
        public announcements: string;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: protoLogin.ILoginResponse): protoLogin.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link protoLogin.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoLogin.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link protoLogin.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoLogin.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoLogin.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoLogin.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): protoLogin.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoLogin.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomCreateRequest. */
    interface IRoomCreateRequest {

        /** RoomCreateRequest appId */
        appId?: (number|null);

        /** RoomCreateRequest gameId */
        gameId?: (number|null);

        /** RoomCreateRequest userId */
        userId?: (string|null);

        /** RoomCreateRequest deviceId */
        deviceId?: (string|null);

        /** RoomCreateRequest maxRounds */
        maxRounds?: (number|null);

        /** RoomCreateRequest roomConfig */
        roomConfig?: (string|null);

        /** RoomCreateRequest coreVersion */
        coreVersion?: (string|null);

        /** RoomCreateRequest clubId */
        clubId?: (number|null);

        /** RoomCreateRequest clubRoomType */
        clubRoomType?: (number|null);
    }

    /** Represents a RoomCreateRequest. */
    class RoomCreateRequest implements IRoomCreateRequest {

        /**
         * Constructs a new RoomCreateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoLogin.IRoomCreateRequest);

        /** RoomCreateRequest appId. */
        public appId: number;

        /** RoomCreateRequest gameId. */
        public gameId: number;

        /** RoomCreateRequest userId. */
        public userId: string;

        /** RoomCreateRequest deviceId. */
        public deviceId: string;

        /** RoomCreateRequest maxRounds. */
        public maxRounds: number;

        /** RoomCreateRequest roomConfig. */
        public roomConfig: string;

        /** RoomCreateRequest coreVersion. */
        public coreVersion: string;

        /** RoomCreateRequest clubId. */
        public clubId: number;

        /** RoomCreateRequest clubRoomType. */
        public clubRoomType: number;

        /**
         * Creates a new RoomCreateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomCreateRequest instance
         */
        public static create(properties?: protoLogin.IRoomCreateRequest): protoLogin.RoomCreateRequest;

        /**
         * Encodes the specified RoomCreateRequest message. Does not implicitly {@link protoLogin.RoomCreateRequest.verify|verify} messages.
         * @param message RoomCreateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoLogin.IRoomCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomCreateRequest message, length delimited. Does not implicitly {@link protoLogin.RoomCreateRequest.verify|verify} messages.
         * @param message RoomCreateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoLogin.IRoomCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomCreateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoLogin.RoomCreateRequest;

        /**
         * Decodes a RoomCreateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoLogin.RoomCreateRequest;

        /**
         * Verifies a RoomCreateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomCreateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomCreateRequest
         */
        public static fromObject(object: { [k: string]: any }): protoLogin.RoomCreateRequest;

        /**
         * Creates a plain object from a RoomCreateRequest message. Also converts values to other types if specified.
         * @param message RoomCreateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoLogin.RoomCreateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomCreateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomCreateResponse. */
    interface IRoomCreateResponse {

        /** RoomCreateResponse code */
        code?: (number|null);

        /** RoomCreateResponse roomId */
        roomId?: (number|null);

        /** RoomCreateResponse serverIp */
        serverIp?: (string|null);

        /** RoomCreateResponse serverPort */
        serverPort?: (string|null);

        /** RoomCreateResponse payGold */
        payGold?: (number|null);
    }

    /** Represents a RoomCreateResponse. */
    class RoomCreateResponse implements IRoomCreateResponse {

        /**
         * Constructs a new RoomCreateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoLogin.IRoomCreateResponse);

        /** RoomCreateResponse code. */
        public code: number;

        /** RoomCreateResponse roomId. */
        public roomId: number;

        /** RoomCreateResponse serverIp. */
        public serverIp: string;

        /** RoomCreateResponse serverPort. */
        public serverPort: string;

        /** RoomCreateResponse payGold. */
        public payGold: number;

        /**
         * Creates a new RoomCreateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomCreateResponse instance
         */
        public static create(properties?: protoLogin.IRoomCreateResponse): protoLogin.RoomCreateResponse;

        /**
         * Encodes the specified RoomCreateResponse message. Does not implicitly {@link protoLogin.RoomCreateResponse.verify|verify} messages.
         * @param message RoomCreateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoLogin.IRoomCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomCreateResponse message, length delimited. Does not implicitly {@link protoLogin.RoomCreateResponse.verify|verify} messages.
         * @param message RoomCreateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoLogin.IRoomCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomCreateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomCreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoLogin.RoomCreateResponse;

        /**
         * Decodes a RoomCreateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomCreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoLogin.RoomCreateResponse;

        /**
         * Verifies a RoomCreateResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomCreateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomCreateResponse
         */
        public static fromObject(object: { [k: string]: any }): protoLogin.RoomCreateResponse;

        /**
         * Creates a plain object from a RoomCreateResponse message. Also converts values to other types if specified.
         * @param message RoomCreateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoLogin.RoomCreateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomCreateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
