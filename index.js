import { containerPhrasing } from "mdast-util-to-markdown/lib/util/container-phrasing.js";
const enterMark = function (token) {
    this.enter({ type: 'mark', children: [] }, token);
};
const exitMark = function (token) {
    this.exit(token);
};
const handleMark = function (node, _, context) {
    const exit = context.enter('mark');
    const value = containerPhrasing(node, context, { before: '=', after: '=' });
    exit();
    return '==' + value + '==';
};
export const pandocMarkFromMarkdown = {
    canContainEols: ['mark'],
    enter: { mark: enterMark },
    exit: { mark: exitMark }
};
export const pandocMarkToMarkdown = {
    unsafe: [{ character: '=', inConstruct: 'phrasing' }],
    handlers: { mark: handleMark }
};
