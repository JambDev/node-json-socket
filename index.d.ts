export = json_socket;
import net from "net";

type JsonSocketOpts = { delimeter: string };

declare class json_socket {
	constructor(socket: net.Socket, opts?: JsonSocketOpts);

	connect: net.Socket["connect"];

	on: net.Socket["on"];

	end: net.Socket["end"];

	setTimeout: net.Socket["setTimeout"];

	setKeepAlive: net.Socket["setKeepAlive"];

	isClosed(): boolean;

	sendEndError(err: Error): Promise<void>;

	sendError(err: Error): Promise<void>;

	sendMessage(message: any): Promise<void>;

	sendEndMessage(message: any): Promise<void>;

	static sendSingleMessage(port: any, host: string, message: any, opts?: JsonSocketOpts): Promise<void>;

	static sendSingleMessageAndReceive(port: number, host: string, message: any, opts?: JsonSocketOpts): Promise<any>;

}