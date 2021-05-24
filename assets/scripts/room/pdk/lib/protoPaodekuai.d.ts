import * as $protobuf from "protobufjs";
/** Namespace protoPaodekuai. */
export namespace protoPaodekuai {

    /** Properties of a Player. */
    interface IPlayer {

        /** Player seat */
        seat?: (number|null);

        /** Player player */
        player?: (string|null);

        /** Player info */
        info?: (string|null);

        /** Player readyState */
        readyState?: (number|null);

        /** Player isOnline */
        isOnline?: (number|null);

        /** Player score */
        score?: (number|null);

        /** Player isBaodan */
        isBaodan?: (number|null);

        /** Player cardsLen */
        cardsLen?: (number|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IPlayer);

        /** Player seat. */
        public seat: number;

        /** Player player. */
        public player: string;

        /** Player info. */
        public info: string;

        /** Player readyState. */
        public readyState: number;

        /** Player isOnline. */
        public isOnline: number;

        /** Player score. */
        public score: number;

        /** Player isBaodan. */
        public isBaodan: number;

        /** Player cardsLen. */
        public cardsLen: number;

        /**
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: protoPaodekuai.IPlayer): protoPaodekuai.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link protoPaodekuai.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link protoPaodekuai.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.Player;

        /**
         * Verifies a Player message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Player
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.Player;

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @param message Player
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Player to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomRequest. */
    interface IEnterRoomRequest {

        /** EnterRoomRequest roomId */
        roomId?: (number|null);

        /** EnterRoomRequest player */
        player?: (string|null);

        /** EnterRoomRequest info */
        info?: (string|null);
    }

    /** Represents an EnterRoomRequest. */
    class EnterRoomRequest implements IEnterRoomRequest {

        /**
         * Constructs a new EnterRoomRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IEnterRoomRequest);

        /** EnterRoomRequest roomId. */
        public roomId: number;

        /** EnterRoomRequest player. */
        public player: string;

        /** EnterRoomRequest info. */
        public info: string;

        /**
         * Creates a new EnterRoomRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomRequest instance
         */
        public static create(properties?: protoPaodekuai.IEnterRoomRequest): protoPaodekuai.EnterRoomRequest;

        /**
         * Encodes the specified EnterRoomRequest message. Does not implicitly {@link protoPaodekuai.EnterRoomRequest.verify|verify} messages.
         * @param message EnterRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IEnterRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomRequest message, length delimited. Does not implicitly {@link protoPaodekuai.EnterRoomRequest.verify|verify} messages.
         * @param message EnterRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IEnterRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.EnterRoomRequest;

        /**
         * Decodes an EnterRoomRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.EnterRoomRequest;

        /**
         * Verifies an EnterRoomRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomRequest
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.EnterRoomRequest;

        /**
         * Creates a plain object from an EnterRoomRequest message. Also converts values to other types if specified.
         * @param message EnterRoomRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.EnterRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomResponse. */
    interface IEnterRoomResponse {

        /** EnterRoomResponse code */
        code?: (number|null);

        /** EnterRoomResponse roomId */
        roomId?: (number|null);

        /** EnterRoomResponse roomKwargs */
        roomKwargs?: (string|null);

        /** EnterRoomResponse roomOwner */
        roomOwner?: (string|null);

        /** EnterRoomResponse roomOwnerInfo */
        roomOwnerInfo?: (string|null);

        /** EnterRoomResponse roomState */
        roomState?: (number|null);

        /** EnterRoomResponse gameRolls */
        gameRolls?: (number|null);

        /** EnterRoomResponse player */
        player?: (protoPaodekuai.IPlayer[]|null);
    }

    /** Represents an EnterRoomResponse. */
    class EnterRoomResponse implements IEnterRoomResponse {

        /**
         * Constructs a new EnterRoomResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IEnterRoomResponse);

        /** EnterRoomResponse code. */
        public code: number;

        /** EnterRoomResponse roomId. */
        public roomId: number;

        /** EnterRoomResponse roomKwargs. */
        public roomKwargs: string;

        /** EnterRoomResponse roomOwner. */
        public roomOwner: string;

        /** EnterRoomResponse roomOwnerInfo. */
        public roomOwnerInfo: string;

        /** EnterRoomResponse roomState. */
        public roomState: number;

        /** EnterRoomResponse gameRolls. */
        public gameRolls: number;

        /** EnterRoomResponse player. */
        public player: protoPaodekuai.IPlayer[];

        /**
         * Creates a new EnterRoomResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomResponse instance
         */
        public static create(properties?: protoPaodekuai.IEnterRoomResponse): protoPaodekuai.EnterRoomResponse;

        /**
         * Encodes the specified EnterRoomResponse message. Does not implicitly {@link protoPaodekuai.EnterRoomResponse.verify|verify} messages.
         * @param message EnterRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IEnterRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomResponse message, length delimited. Does not implicitly {@link protoPaodekuai.EnterRoomResponse.verify|verify} messages.
         * @param message EnterRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IEnterRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.EnterRoomResponse;

        /**
         * Decodes an EnterRoomResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.EnterRoomResponse;

        /**
         * Verifies an EnterRoomResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomResponse
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.EnterRoomResponse;

        /**
         * Creates a plain object from an EnterRoomResponse message. Also converts values to other types if specified.
         * @param message EnterRoomResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.EnterRoomResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomOtherResponse. */
    interface IEnterRoomOtherResponse {

        /** EnterRoomOtherResponse code */
        code?: (number|null);

        /** EnterRoomOtherResponse player */
        player?: (protoPaodekuai.IPlayer|null);
    }

    /** Represents an EnterRoomOtherResponse. */
    class EnterRoomOtherResponse implements IEnterRoomOtherResponse {

        /**
         * Constructs a new EnterRoomOtherResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IEnterRoomOtherResponse);

        /** EnterRoomOtherResponse code. */
        public code: number;

        /** EnterRoomOtherResponse player. */
        public player?: (protoPaodekuai.IPlayer|null);

        /**
         * Creates a new EnterRoomOtherResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomOtherResponse instance
         */
        public static create(properties?: protoPaodekuai.IEnterRoomOtherResponse): protoPaodekuai.EnterRoomOtherResponse;

        /**
         * Encodes the specified EnterRoomOtherResponse message. Does not implicitly {@link protoPaodekuai.EnterRoomOtherResponse.verify|verify} messages.
         * @param message EnterRoomOtherResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IEnterRoomOtherResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomOtherResponse message, length delimited. Does not implicitly {@link protoPaodekuai.EnterRoomOtherResponse.verify|verify} messages.
         * @param message EnterRoomOtherResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IEnterRoomOtherResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomOtherResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomOtherResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.EnterRoomOtherResponse;

        /**
         * Decodes an EnterRoomOtherResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomOtherResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.EnterRoomOtherResponse;

        /**
         * Verifies an EnterRoomOtherResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterRoomOtherResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomOtherResponse
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.EnterRoomOtherResponse;

        /**
         * Creates a plain object from an EnterRoomOtherResponse message. Also converts values to other types if specified.
         * @param message EnterRoomOtherResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.EnterRoomOtherResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomOtherResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OnlineStatusResponse. */
    interface IOnlineStatusResponse {

        /** OnlineStatusResponse player */
        player?: (string|null);

        /** OnlineStatusResponse status */
        status?: (boolean|null);
    }

    /** Represents an OnlineStatusResponse. */
    class OnlineStatusResponse implements IOnlineStatusResponse {

        /**
         * Constructs a new OnlineStatusResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IOnlineStatusResponse);

        /** OnlineStatusResponse player. */
        public player: string;

        /** OnlineStatusResponse status. */
        public status: boolean;

        /**
         * Creates a new OnlineStatusResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OnlineStatusResponse instance
         */
        public static create(properties?: protoPaodekuai.IOnlineStatusResponse): protoPaodekuai.OnlineStatusResponse;

        /**
         * Encodes the specified OnlineStatusResponse message. Does not implicitly {@link protoPaodekuai.OnlineStatusResponse.verify|verify} messages.
         * @param message OnlineStatusResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IOnlineStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OnlineStatusResponse message, length delimited. Does not implicitly {@link protoPaodekuai.OnlineStatusResponse.verify|verify} messages.
         * @param message OnlineStatusResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IOnlineStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OnlineStatusResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OnlineStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.OnlineStatusResponse;

        /**
         * Decodes an OnlineStatusResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OnlineStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.OnlineStatusResponse;

        /**
         * Verifies an OnlineStatusResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OnlineStatusResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OnlineStatusResponse
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.OnlineStatusResponse;

        /**
         * Creates a plain object from an OnlineStatusResponse message. Also converts values to other types if specified.
         * @param message OnlineStatusResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.OnlineStatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OnlineStatusResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReconnectResponse. */
    interface IReconnectResponse {

        /** ReconnectResponse pCards */
        pCards?: (number[]|null);

        /** ReconnectResponse isOpen */
        isOpen?: (number|null);

        /** ReconnectResponse tableUuid */
        tableUuid?: (string|null);

        /** ReconnectResponse tableCards */
        tableCards?: (number[]|null);

        /** ReconnectResponse tableCardType */
        tableCardType?: (string|null);

        /** ReconnectResponse code */
        code?: (number|null);

        /** ReconnectResponse roomId */
        roomId?: (number|null);

        /** ReconnectResponse roomKwargs */
        roomKwargs?: (string|null);

        /** ReconnectResponse roomOwner */
        roomOwner?: (string|null);

        /** ReconnectResponse roomOwnerInfo */
        roomOwnerInfo?: (string|null);

        /** ReconnectResponse roomState */
        roomState?: (number|null);

        /** ReconnectResponse gameRolls */
        gameRolls?: (number|null);

        /** ReconnectResponse player */
        player?: (protoPaodekuai.IPlayer[]|null);
    }

    /** Represents a ReconnectResponse. */
    class ReconnectResponse implements IReconnectResponse {

        /**
         * Constructs a new ReconnectResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IReconnectResponse);

        /** ReconnectResponse pCards. */
        public pCards: number[];

        /** ReconnectResponse isOpen. */
        public isOpen: number;

        /** ReconnectResponse tableUuid. */
        public tableUuid: string;

        /** ReconnectResponse tableCards. */
        public tableCards: number[];

        /** ReconnectResponse tableCardType. */
        public tableCardType: string;

        /** ReconnectResponse code. */
        public code: number;

        /** ReconnectResponse roomId. */
        public roomId: number;

        /** ReconnectResponse roomKwargs. */
        public roomKwargs: string;

        /** ReconnectResponse roomOwner. */
        public roomOwner: string;

        /** ReconnectResponse roomOwnerInfo. */
        public roomOwnerInfo: string;

        /** ReconnectResponse roomState. */
        public roomState: number;

        /** ReconnectResponse gameRolls. */
        public gameRolls: number;

        /** ReconnectResponse player. */
        public player: protoPaodekuai.IPlayer[];

        /**
         * Creates a new ReconnectResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReconnectResponse instance
         */
        public static create(properties?: protoPaodekuai.IReconnectResponse): protoPaodekuai.ReconnectResponse;

        /**
         * Encodes the specified ReconnectResponse message. Does not implicitly {@link protoPaodekuai.ReconnectResponse.verify|verify} messages.
         * @param message ReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReconnectResponse message, length delimited. Does not implicitly {@link protoPaodekuai.ReconnectResponse.verify|verify} messages.
         * @param message ReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReconnectResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.ReconnectResponse;

        /**
         * Decodes a ReconnectResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.ReconnectResponse;

        /**
         * Verifies a ReconnectResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReconnectResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReconnectResponse
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.ReconnectResponse;

        /**
         * Creates a plain object from a ReconnectResponse message. Also converts values to other types if specified.
         * @param message ReconnectResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.ReconnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReconnectResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReadyRequest. */
    interface IReadyRequest {

        /** ReadyRequest player */
        player?: (string|null);
    }

    /** Represents a ReadyRequest. */
    class ReadyRequest implements IReadyRequest {

        /**
         * Constructs a new ReadyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IReadyRequest);

        /** ReadyRequest player. */
        public player: string;

        /**
         * Creates a new ReadyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyRequest instance
         */
        public static create(properties?: protoPaodekuai.IReadyRequest): protoPaodekuai.ReadyRequest;

        /**
         * Encodes the specified ReadyRequest message. Does not implicitly {@link protoPaodekuai.ReadyRequest.verify|verify} messages.
         * @param message ReadyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IReadyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadyRequest message, length delimited. Does not implicitly {@link protoPaodekuai.ReadyRequest.verify|verify} messages.
         * @param message ReadyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IReadyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.ReadyRequest;

        /**
         * Decodes a ReadyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.ReadyRequest;

        /**
         * Verifies a ReadyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadyRequest
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.ReadyRequest;

        /**
         * Creates a plain object from a ReadyRequest message. Also converts values to other types if specified.
         * @param message ReadyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.ReadyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReadyResponse. */
    interface IReadyResponse {

        /** ReadyResponse code */
        code?: (number|null);

        /** ReadyResponse uuid */
        uuid?: (string|null);
    }

    /** Represents a ReadyResponse. */
    class ReadyResponse implements IReadyResponse {

        /**
         * Constructs a new ReadyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IReadyResponse);

        /** ReadyResponse code. */
        public code: number;

        /** ReadyResponse uuid. */
        public uuid: string;

        /**
         * Creates a new ReadyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyResponse instance
         */
        public static create(properties?: protoPaodekuai.IReadyResponse): protoPaodekuai.ReadyResponse;

        /**
         * Encodes the specified ReadyResponse message. Does not implicitly {@link protoPaodekuai.ReadyResponse.verify|verify} messages.
         * @param message ReadyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IReadyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadyResponse message, length delimited. Does not implicitly {@link protoPaodekuai.ReadyResponse.verify|verify} messages.
         * @param message ReadyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IReadyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.ReadyResponse;

        /**
         * Decodes a ReadyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.ReadyResponse;

        /**
         * Verifies a ReadyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadyResponse
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.ReadyResponse;

        /**
         * Creates a plain object from a ReadyResponse message. Also converts values to other types if specified.
         * @param message ReadyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.ReadyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DealResponse. */
    interface IDealResponse {

        /** DealResponse cards */
        cards?: (number[]|null);
    }

    /** Represents a DealResponse. */
    class DealResponse implements IDealResponse {

        /**
         * Constructs a new DealResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IDealResponse);

        /** DealResponse cards. */
        public cards: number[];

        /**
         * Creates a new DealResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DealResponse instance
         */
        public static create(properties?: protoPaodekuai.IDealResponse): protoPaodekuai.DealResponse;

        /**
         * Encodes the specified DealResponse message. Does not implicitly {@link protoPaodekuai.DealResponse.verify|verify} messages.
         * @param message DealResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IDealResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DealResponse message, length delimited. Does not implicitly {@link protoPaodekuai.DealResponse.verify|verify} messages.
         * @param message DealResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IDealResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DealResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DealResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.DealResponse;

        /**
         * Decodes a DealResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DealResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.DealResponse;

        /**
         * Verifies a DealResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DealResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DealResponse
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.DealResponse;

        /**
         * Creates a plain object from a DealResponse message. Also converts values to other types if specified.
         * @param message DealResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.DealResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DealResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartChuPaiResponse. */
    interface IStartChuPaiResponse {

        /** StartChuPaiResponse cardType */
        cardType?: (string|null);

        /** StartChuPaiResponse uuid */
        uuid?: (string|null);

        /** StartChuPaiResponse isFirst */
        isFirst?: (string|null);

        /** StartChuPaiResponse find_333x */
        find_333x?: (string|null);

        /** StartChuPaiResponse expireSeconds */
        expireSeconds?: (string|null);
    }

    /** Represents a StartChuPaiResponse. */
    class StartChuPaiResponse implements IStartChuPaiResponse {

        /**
         * Constructs a new StartChuPaiResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IStartChuPaiResponse);

        /** StartChuPaiResponse cardType. */
        public cardType: string;

        /** StartChuPaiResponse uuid. */
        public uuid: string;

        /** StartChuPaiResponse isFirst. */
        public isFirst: string;

        /** StartChuPaiResponse find_333x. */
        public find_333x: string;

        /** StartChuPaiResponse expireSeconds. */
        public expireSeconds: string;

        /**
         * Creates a new StartChuPaiResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartChuPaiResponse instance
         */
        public static create(properties?: protoPaodekuai.IStartChuPaiResponse): protoPaodekuai.StartChuPaiResponse;

        /**
         * Encodes the specified StartChuPaiResponse message. Does not implicitly {@link protoPaodekuai.StartChuPaiResponse.verify|verify} messages.
         * @param message StartChuPaiResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IStartChuPaiResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartChuPaiResponse message, length delimited. Does not implicitly {@link protoPaodekuai.StartChuPaiResponse.verify|verify} messages.
         * @param message StartChuPaiResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IStartChuPaiResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartChuPaiResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartChuPaiResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.StartChuPaiResponse;

        /**
         * Decodes a StartChuPaiResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartChuPaiResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.StartChuPaiResponse;

        /**
         * Verifies a StartChuPaiResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartChuPaiResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartChuPaiResponse
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.StartChuPaiResponse;

        /**
         * Creates a plain object from a StartChuPaiResponse message. Also converts values to other types if specified.
         * @param message StartChuPaiResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.StartChuPaiResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartChuPaiResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChuPaiRequest. */
    interface IChuPaiRequest {

        /** ChuPaiRequest cards */
        cards?: (number[]|null);
    }

    /** Represents a ChuPaiRequest. */
    class ChuPaiRequest implements IChuPaiRequest {

        /**
         * Constructs a new ChuPaiRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IChuPaiRequest);

        /** ChuPaiRequest cards. */
        public cards: number[];

        /**
         * Creates a new ChuPaiRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChuPaiRequest instance
         */
        public static create(properties?: protoPaodekuai.IChuPaiRequest): protoPaodekuai.ChuPaiRequest;

        /**
         * Encodes the specified ChuPaiRequest message. Does not implicitly {@link protoPaodekuai.ChuPaiRequest.verify|verify} messages.
         * @param message ChuPaiRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IChuPaiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChuPaiRequest message, length delimited. Does not implicitly {@link protoPaodekuai.ChuPaiRequest.verify|verify} messages.
         * @param message ChuPaiRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IChuPaiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChuPaiRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChuPaiRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.ChuPaiRequest;

        /**
         * Decodes a ChuPaiRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChuPaiRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.ChuPaiRequest;

        /**
         * Verifies a ChuPaiRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChuPaiRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChuPaiRequest
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.ChuPaiRequest;

        /**
         * Creates a plain object from a ChuPaiRequest message. Also converts values to other types if specified.
         * @param message ChuPaiRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.ChuPaiRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChuPaiRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChuPaiResponse. */
    interface IChuPaiResponse {

        /** ChuPaiResponse cards */
        cards?: (number[]|null);

        /** ChuPaiResponse cardType */
        cardType?: (string|null);

        /** ChuPaiResponse uuid */
        uuid?: (string|null);

        /** ChuPaiResponse res */
        res?: (number|null);
    }

    /** Represents a ChuPaiResponse. */
    class ChuPaiResponse implements IChuPaiResponse {

        /**
         * Constructs a new ChuPaiResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IChuPaiResponse);

        /** ChuPaiResponse cards. */
        public cards: number[];

        /** ChuPaiResponse cardType. */
        public cardType: string;

        /** ChuPaiResponse uuid. */
        public uuid: string;

        /** ChuPaiResponse res. */
        public res: number;

        /**
         * Creates a new ChuPaiResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChuPaiResponse instance
         */
        public static create(properties?: protoPaodekuai.IChuPaiResponse): protoPaodekuai.ChuPaiResponse;

        /**
         * Encodes the specified ChuPaiResponse message. Does not implicitly {@link protoPaodekuai.ChuPaiResponse.verify|verify} messages.
         * @param message ChuPaiResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IChuPaiResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChuPaiResponse message, length delimited. Does not implicitly {@link protoPaodekuai.ChuPaiResponse.verify|verify} messages.
         * @param message ChuPaiResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IChuPaiResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChuPaiResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChuPaiResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.ChuPaiResponse;

        /**
         * Decodes a ChuPaiResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChuPaiResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.ChuPaiResponse;

        /**
         * Verifies a ChuPaiResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChuPaiResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChuPaiResponse
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.ChuPaiResponse;

        /**
         * Creates a plain object from a ChuPaiResponse message. Also converts values to other types if specified.
         * @param message ChuPaiResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.ChuPaiResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChuPaiResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaoDanResponse. */
    interface IBaoDanResponse {

        /** BaoDanResponse msg */
        msg?: (number|null);

        /** BaoDanResponse uuid */
        uuid?: (string|null);
    }

    /** Represents a BaoDanResponse. */
    class BaoDanResponse implements IBaoDanResponse {

        /**
         * Constructs a new BaoDanResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IBaoDanResponse);

        /** BaoDanResponse msg. */
        public msg: number;

        /** BaoDanResponse uuid. */
        public uuid: string;

        /**
         * Creates a new BaoDanResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaoDanResponse instance
         */
        public static create(properties?: protoPaodekuai.IBaoDanResponse): protoPaodekuai.BaoDanResponse;

        /**
         * Encodes the specified BaoDanResponse message. Does not implicitly {@link protoPaodekuai.BaoDanResponse.verify|verify} messages.
         * @param message BaoDanResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IBaoDanResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaoDanResponse message, length delimited. Does not implicitly {@link protoPaodekuai.BaoDanResponse.verify|verify} messages.
         * @param message BaoDanResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IBaoDanResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaoDanResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaoDanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.BaoDanResponse;

        /**
         * Decodes a BaoDanResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaoDanResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.BaoDanResponse;

        /**
         * Verifies a BaoDanResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaoDanResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaoDanResponse
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.BaoDanResponse;

        /**
         * Creates a plain object from a BaoDanResponse message. Also converts values to other types if specified.
         * @param message BaoDanResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.BaoDanResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaoDanResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExitRoomRequest. */
    interface IExitRoomRequest {
    }

    /** Represents an ExitRoomRequest. */
    class ExitRoomRequest implements IExitRoomRequest {

        /**
         * Constructs a new ExitRoomRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IExitRoomRequest);

        /**
         * Creates a new ExitRoomRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExitRoomRequest instance
         */
        public static create(properties?: protoPaodekuai.IExitRoomRequest): protoPaodekuai.ExitRoomRequest;

        /**
         * Encodes the specified ExitRoomRequest message. Does not implicitly {@link protoPaodekuai.ExitRoomRequest.verify|verify} messages.
         * @param message ExitRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IExitRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExitRoomRequest message, length delimited. Does not implicitly {@link protoPaodekuai.ExitRoomRequest.verify|verify} messages.
         * @param message ExitRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IExitRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExitRoomRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExitRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.ExitRoomRequest;

        /**
         * Decodes an ExitRoomRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExitRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.ExitRoomRequest;

        /**
         * Verifies an ExitRoomRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExitRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExitRoomRequest
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.ExitRoomRequest;

        /**
         * Creates a plain object from an ExitRoomRequest message. Also converts values to other types if specified.
         * @param message ExitRoomRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.ExitRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExitRoomRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExitRoomResponse. */
    interface IExitRoomResponse {

        /** ExitRoomResponse code */
        code?: (number|null);

        /** ExitRoomResponse player */
        player?: (string|null);

        /** ExitRoomResponse type */
        type?: (number|null);

        /** ExitRoomResponse msg */
        msg?: (number|null);
    }

    /** Represents an ExitRoomResponse. */
    class ExitRoomResponse implements IExitRoomResponse {

        /**
         * Constructs a new ExitRoomResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IExitRoomResponse);

        /** ExitRoomResponse code. */
        public code: number;

        /** ExitRoomResponse player. */
        public player: string;

        /** ExitRoomResponse type. */
        public type: number;

        /** ExitRoomResponse msg. */
        public msg: number;

        /**
         * Creates a new ExitRoomResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExitRoomResponse instance
         */
        public static create(properties?: protoPaodekuai.IExitRoomResponse): protoPaodekuai.ExitRoomResponse;

        /**
         * Encodes the specified ExitRoomResponse message. Does not implicitly {@link protoPaodekuai.ExitRoomResponse.verify|verify} messages.
         * @param message ExitRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IExitRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExitRoomResponse message, length delimited. Does not implicitly {@link protoPaodekuai.ExitRoomResponse.verify|verify} messages.
         * @param message ExitRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IExitRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExitRoomResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExitRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.ExitRoomResponse;

        /**
         * Decodes an ExitRoomResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExitRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.ExitRoomResponse;

        /**
         * Verifies an ExitRoomResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExitRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExitRoomResponse
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.ExitRoomResponse;

        /**
         * Creates a plain object from an ExitRoomResponse message. Also converts values to other types if specified.
         * @param message ExitRoomResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.ExitRoomResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExitRoomResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DismissRoomRequest. */
    interface IDismissRoomRequest {
    }

    /** Represents a DismissRoomRequest. */
    class DismissRoomRequest implements IDismissRoomRequest {

        /**
         * Constructs a new DismissRoomRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IDismissRoomRequest);

        /**
         * Creates a new DismissRoomRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DismissRoomRequest instance
         */
        public static create(properties?: protoPaodekuai.IDismissRoomRequest): protoPaodekuai.DismissRoomRequest;

        /**
         * Encodes the specified DismissRoomRequest message. Does not implicitly {@link protoPaodekuai.DismissRoomRequest.verify|verify} messages.
         * @param message DismissRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IDismissRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DismissRoomRequest message, length delimited. Does not implicitly {@link protoPaodekuai.DismissRoomRequest.verify|verify} messages.
         * @param message DismissRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IDismissRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DismissRoomRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DismissRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.DismissRoomRequest;

        /**
         * Decodes a DismissRoomRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DismissRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.DismissRoomRequest;

        /**
         * Verifies a DismissRoomRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DismissRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DismissRoomRequest
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.DismissRoomRequest;

        /**
         * Creates a plain object from a DismissRoomRequest message. Also converts values to other types if specified.
         * @param message DismissRoomRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.DismissRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DismissRoomRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DismissRoomResponse. */
    interface IDismissRoomResponse {

        /** DismissRoomResponse code */
        code?: (number|null);

        /** DismissRoomResponse flag */
        flag?: (number|null);
    }

    /** Represents a DismissRoomResponse. */
    class DismissRoomResponse implements IDismissRoomResponse {

        /**
         * Constructs a new DismissRoomResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IDismissRoomResponse);

        /** DismissRoomResponse code. */
        public code: number;

        /** DismissRoomResponse flag. */
        public flag: number;

        /**
         * Creates a new DismissRoomResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DismissRoomResponse instance
         */
        public static create(properties?: protoPaodekuai.IDismissRoomResponse): protoPaodekuai.DismissRoomResponse;

        /**
         * Encodes the specified DismissRoomResponse message. Does not implicitly {@link protoPaodekuai.DismissRoomResponse.verify|verify} messages.
         * @param message DismissRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IDismissRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DismissRoomResponse message, length delimited. Does not implicitly {@link protoPaodekuai.DismissRoomResponse.verify|verify} messages.
         * @param message DismissRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IDismissRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DismissRoomResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DismissRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.DismissRoomResponse;

        /**
         * Decodes a DismissRoomResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DismissRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.DismissRoomResponse;

        /**
         * Verifies a DismissRoomResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DismissRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DismissRoomResponse
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.DismissRoomResponse;

        /**
         * Creates a plain object from a DismissRoomResponse message. Also converts values to other types if specified.
         * @param message DismissRoomResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.DismissRoomResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DismissRoomResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerVoteRequest. */
    interface IPlayerVoteRequest {

        /** PlayerVoteRequest flag */
        flag?: (boolean|null);
    }

    /** Represents a PlayerVoteRequest. */
    class PlayerVoteRequest implements IPlayerVoteRequest {

        /**
         * Constructs a new PlayerVoteRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IPlayerVoteRequest);

        /** PlayerVoteRequest flag. */
        public flag: boolean;

        /**
         * Creates a new PlayerVoteRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerVoteRequest instance
         */
        public static create(properties?: protoPaodekuai.IPlayerVoteRequest): protoPaodekuai.PlayerVoteRequest;

        /**
         * Encodes the specified PlayerVoteRequest message. Does not implicitly {@link protoPaodekuai.PlayerVoteRequest.verify|verify} messages.
         * @param message PlayerVoteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IPlayerVoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerVoteRequest message, length delimited. Does not implicitly {@link protoPaodekuai.PlayerVoteRequest.verify|verify} messages.
         * @param message PlayerVoteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IPlayerVoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerVoteRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerVoteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.PlayerVoteRequest;

        /**
         * Decodes a PlayerVoteRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerVoteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.PlayerVoteRequest;

        /**
         * Verifies a PlayerVoteRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerVoteRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerVoteRequest
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.PlayerVoteRequest;

        /**
         * Creates a plain object from a PlayerVoteRequest message. Also converts values to other types if specified.
         * @param message PlayerVoteRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.PlayerVoteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerVoteRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerVoteResponse. */
    interface IPlayerVoteResponse {

        /** PlayerVoteResponse code */
        code?: (number|null);

        /** PlayerVoteResponse player */
        player?: (string|null);

        /** PlayerVoteResponse flag */
        flag?: (number|null);

        /** PlayerVoteResponse type */
        type?: (number|null);
    }

    /** Represents a PlayerVoteResponse. */
    class PlayerVoteResponse implements IPlayerVoteResponse {

        /**
         * Constructs a new PlayerVoteResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.IPlayerVoteResponse);

        /** PlayerVoteResponse code. */
        public code: number;

        /** PlayerVoteResponse player. */
        public player: string;

        /** PlayerVoteResponse flag. */
        public flag: number;

        /** PlayerVoteResponse type. */
        public type: number;

        /**
         * Creates a new PlayerVoteResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerVoteResponse instance
         */
        public static create(properties?: protoPaodekuai.IPlayerVoteResponse): protoPaodekuai.PlayerVoteResponse;

        /**
         * Encodes the specified PlayerVoteResponse message. Does not implicitly {@link protoPaodekuai.PlayerVoteResponse.verify|verify} messages.
         * @param message PlayerVoteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.IPlayerVoteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerVoteResponse message, length delimited. Does not implicitly {@link protoPaodekuai.PlayerVoteResponse.verify|verify} messages.
         * @param message PlayerVoteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.IPlayerVoteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerVoteResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerVoteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.PlayerVoteResponse;

        /**
         * Decodes a PlayerVoteResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerVoteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.PlayerVoteResponse;

        /**
         * Verifies a PlayerVoteResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerVoteResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerVoteResponse
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.PlayerVoteResponse;

        /**
         * Creates a plain object from a PlayerVoteResponse message. Also converts values to other types if specified.
         * @param message PlayerVoteResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.PlayerVoteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerVoteResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SponsorVoteResponse. */
    interface ISponsorVoteResponse {

        /** SponsorVoteResponse code */
        code?: (number|null);

        /** SponsorVoteResponse expireSeconds */
        expireSeconds?: (number|null);

        /** SponsorVoteResponse totalTime */
        totalTime?: (number|null);

        /** SponsorVoteResponse sponsor */
        sponsor?: (string|null);

        /** SponsorVoteResponse agreevote */
        agreevote?: (protoPaodekuai.SponsorVoteResponse.IAgreeVote[]|null);

        /** SponsorVoteResponse timeCode */
        timeCode?: (number|null);

        /** SponsorVoteResponse type */
        type?: (number|null);
    }

    /** Represents a SponsorVoteResponse. */
    class SponsorVoteResponse implements ISponsorVoteResponse {

        /**
         * Constructs a new SponsorVoteResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoPaodekuai.ISponsorVoteResponse);

        /** SponsorVoteResponse code. */
        public code: number;

        /** SponsorVoteResponse expireSeconds. */
        public expireSeconds: number;

        /** SponsorVoteResponse totalTime. */
        public totalTime: number;

        /** SponsorVoteResponse sponsor. */
        public sponsor: string;

        /** SponsorVoteResponse agreevote. */
        public agreevote: protoPaodekuai.SponsorVoteResponse.IAgreeVote[];

        /** SponsorVoteResponse timeCode. */
        public timeCode: number;

        /** SponsorVoteResponse type. */
        public type: number;

        /**
         * Creates a new SponsorVoteResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SponsorVoteResponse instance
         */
        public static create(properties?: protoPaodekuai.ISponsorVoteResponse): protoPaodekuai.SponsorVoteResponse;

        /**
         * Encodes the specified SponsorVoteResponse message. Does not implicitly {@link protoPaodekuai.SponsorVoteResponse.verify|verify} messages.
         * @param message SponsorVoteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoPaodekuai.ISponsorVoteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SponsorVoteResponse message, length delimited. Does not implicitly {@link protoPaodekuai.SponsorVoteResponse.verify|verify} messages.
         * @param message SponsorVoteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoPaodekuai.ISponsorVoteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SponsorVoteResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SponsorVoteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.SponsorVoteResponse;

        /**
         * Decodes a SponsorVoteResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SponsorVoteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.SponsorVoteResponse;

        /**
         * Verifies a SponsorVoteResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SponsorVoteResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SponsorVoteResponse
         */
        public static fromObject(object: { [k: string]: any }): protoPaodekuai.SponsorVoteResponse;

        /**
         * Creates a plain object from a SponsorVoteResponse message. Also converts values to other types if specified.
         * @param message SponsorVoteResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoPaodekuai.SponsorVoteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SponsorVoteResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace SponsorVoteResponse {

        /** Properties of an AgreeVote. */
        interface IAgreeVote {

            /** AgreeVote player */
            player?: (string|null);
        }

        /** Represents an AgreeVote. */
        class AgreeVote implements IAgreeVote {

            /**
             * Constructs a new AgreeVote.
             * @param [properties] Properties to set
             */
            constructor(properties?: protoPaodekuai.SponsorVoteResponse.IAgreeVote);

            /** AgreeVote player. */
            public player: string;

            /**
             * Creates a new AgreeVote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AgreeVote instance
             */
            public static create(properties?: protoPaodekuai.SponsorVoteResponse.IAgreeVote): protoPaodekuai.SponsorVoteResponse.AgreeVote;

            /**
             * Encodes the specified AgreeVote message. Does not implicitly {@link protoPaodekuai.SponsorVoteResponse.AgreeVote.verify|verify} messages.
             * @param message AgreeVote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protoPaodekuai.SponsorVoteResponse.IAgreeVote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AgreeVote message, length delimited. Does not implicitly {@link protoPaodekuai.SponsorVoteResponse.AgreeVote.verify|verify} messages.
             * @param message AgreeVote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protoPaodekuai.SponsorVoteResponse.IAgreeVote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AgreeVote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AgreeVote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoPaodekuai.SponsorVoteResponse.AgreeVote;

            /**
             * Decodes an AgreeVote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AgreeVote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoPaodekuai.SponsorVoteResponse.AgreeVote;

            /**
             * Verifies an AgreeVote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AgreeVote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AgreeVote
             */
            public static fromObject(object: { [k: string]: any }): protoPaodekuai.SponsorVoteResponse.AgreeVote;

            /**
             * Creates a plain object from an AgreeVote message. Also converts values to other types if specified.
             * @param message AgreeVote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protoPaodekuai.SponsorVoteResponse.AgreeVote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AgreeVote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
