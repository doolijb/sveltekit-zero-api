import { InternalServerError } from './http.js';
/**
 * @example
 * export async function POST<const Request extends Post>(event: KitEvent<Request>) {
 * 	return endpoint(event)(
 * 		authGuard('admin'),
 * 		validateBody(UserSchema),
 * 		(event) => {
 * 			// ... Do stuff
 * 			return Ok({
 * 				body: {
 * 					...
 * 				}
 * 			})
 * 		}
 * 	)
 * }
*/
export function endpointPipe(event, fallbackResponse) {
    return async function endpointPipeline(fn1, fn2, fn3, fn4, fn5, fn6, fn7, fn8, fn9, fn10, fn11, fn12, fn13, fn14, fn15, fn16, fn17, fn18, fn19, fn20) {
        const n = null;
        let r;
        const ev = event;
        const locals = event.locals;
        if (fn1 && (r = await fn1(ev, locals)))
            return r;
        if (fn2 && (r = await fn2(ev, locals)))
            return r;
        if (fn3 && (r = await fn3(ev, locals)))
            return r;
        if (fn4 && (r = await fn4(ev, locals)))
            return r;
        if (fn5 && (r = await fn5(ev, locals)))
            return r;
        if (fn6 && (r = await fn6(ev, locals)))
            return r;
        if (fn7 && (r = await fn7(ev, locals)))
            return r;
        if (fn8 && (r = await fn8(ev, locals)))
            return r;
        if (fn9 && (r = await fn9(ev, locals)))
            return r;
        if (fn10 && (r = await fn10(ev, locals)))
            return r;
        if (fn11 && (r = await fn11(ev, locals)))
            return r;
        if (fn12 && (r = await fn12(ev, locals)))
            return r;
        if (fn13 && (r = await fn13(ev, locals)))
            return r;
        if (fn14 && (r = await fn14(ev, locals)))
            return r;
        if (fn15 && (r = await fn15(ev, locals)))
            return r;
        if (fn16 && (r = await fn16(ev, locals)))
            return r;
        if (fn17 && (r = await fn17(ev, locals)))
            return r;
        if (fn18 && (r = await fn18(ev, locals)))
            return r;
        if (fn19 && (r = await fn19(ev, locals)))
            return r;
        if (fn20 && (r = await fn20(ev, locals)))
            return r;
        return fallbackResponse ? fallbackResponse() : InternalServerError();
    };
}
