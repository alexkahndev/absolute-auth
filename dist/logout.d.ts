import Elysia from 'elysia';
import type { OAuthEventHandler } from './types';
type LogoutProps = {
    logoutRoute?: string;
    onLogout?: OAuthEventHandler;
};
export declare const logout: ({ logoutRoute, onLogout }: LogoutProps) => Elysia<"", {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    typebox: import("@sinclair/typebox").TModule<{}>;
    error: {};
}, {
    schema: {};
    macro: {};
    macroFn: {};
    parser: {};
}, {
    [x: string]: {
        post: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: import("undici-types").Response;
                500: "Internal Server Error";
                401: "No auth provider found";
            };
        };
    };
}, {
    derive: {};
    resolve: {};
    schema: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
}>;
export {};
