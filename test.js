"use strict";
exports.__esModule = true;
var tape = require("tape");
var mdast_util_from_markdown_1 = require("mdast-util-from-markdown");
tape('example', function (t) {
    t.deepEqual({}, {
        fromMarkdown: mdast_util_from_markdown_1.fromMarkdown
    });
    t.end();
});
