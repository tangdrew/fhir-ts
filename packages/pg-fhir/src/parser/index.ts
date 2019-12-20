import {
  FHIRpathParser,
  FunctionContext,
  IdentifierContext,
  TermContext,
  InvocationContext,
  AndExpressionContext,
  UnionExpressionContext
} from "./FHIRpathParser";
import { FHIRpathLexer } from "./FHIRpathLexer";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { FHIRpathVisitor } from "./FHIRpathVisitor";
import { RuleNode } from "antlr4ts/tree/RuleNode";

export const parse = (path: string) => {
  const inputStream = new ANTLRInputStream(path);
  const lexer = new FHIRpathLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new FHIRpathParser(tokenStream);
  const tree = parser.expression();
  const visitor = new CountIdentifierssVisitor();
  const num = visitor.visit(tree);
  console.log(num);
};

class CountIdentifierssVisitor extends AbstractParseTreeVisitor<number>
  implements FHIRpathVisitor<number> {
  defaultResult() {
    return 0;
  }

  aggregateResult(aggregate: number, nextResult: number) {
    return aggregate + nextResult;
  }

  visitIdentifier(context: IdentifierContext): number {
    console.log({ identifier: context.text });
    return 1 + super.visitChildren(context);
  }

  visitTerm(context: TermContext): number {
    console.log({ term: context.text });
    return super.visitChildren(context);
  }

  visitInvocation(context: InvocationContext): number {
    console.log({ invocation: context.text });
    return super.visitChildren(context);
  }

  visitFunction(context: FunctionContext): number {
    console.log({ function: context.text });
    return super.visitChildren(context);
  }

  visitUnionExpression(context: UnionExpressionContext): number {
    console.log({ union: context.text });
    return super.visitChildren(context);
  }
}
