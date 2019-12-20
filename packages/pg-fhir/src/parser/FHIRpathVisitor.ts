// Generated from FHIRpath.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { TermExpressionContext } from "./FHIRpathParser";
import { InvocationExpressionContext } from "./FHIRpathParser";
import { IndexerExpressionContext } from "./FHIRpathParser";
import { PolarityExpressionContext } from "./FHIRpathParser";
import { MultiplicativeExpressionContext } from "./FHIRpathParser";
import { AdditiveExpressionContext } from "./FHIRpathParser";
import { UnionExpressionContext } from "./FHIRpathParser";
import { InequalityExpressionContext } from "./FHIRpathParser";
import { TypeExpressionContext } from "./FHIRpathParser";
import { EqualityExpressionContext } from "./FHIRpathParser";
import { MembershipExpressionContext } from "./FHIRpathParser";
import { AndExpressionContext } from "./FHIRpathParser";
import { OrExpressionContext } from "./FHIRpathParser";
import { ImpliesExpressionContext } from "./FHIRpathParser";
import { NullLiteralContext } from "./FHIRpathParser";
import { BooleanLiteralContext } from "./FHIRpathParser";
import { StringLiteralContext } from "./FHIRpathParser";
import { NumberLiteralContext } from "./FHIRpathParser";
import { DateTimeLiteralContext } from "./FHIRpathParser";
import { TimeLiteralContext } from "./FHIRpathParser";
import { QuantityLiteralContext } from "./FHIRpathParser";
import { MemberInvocationContext } from "./FHIRpathParser";
import { FunctionInvocationContext } from "./FHIRpathParser";
import { ThisInvocationContext } from "./FHIRpathParser";
import { InvocationTermContext } from "./FHIRpathParser";
import { LiteralTermContext } from "./FHIRpathParser";
import { ExternalConstantTermContext } from "./FHIRpathParser";
import { ParenthesizedTermContext } from "./FHIRpathParser";
import { ExpressionContext } from "./FHIRpathParser";
import { TermContext } from "./FHIRpathParser";
import { LiteralContext } from "./FHIRpathParser";
import { ExternalConstantContext } from "./FHIRpathParser";
import { InvocationContext } from "./FHIRpathParser";
import { FunctionContext } from "./FHIRpathParser";
import { ParamListContext } from "./FHIRpathParser";
import { QuantityContext } from "./FHIRpathParser";
import { UnitContext } from "./FHIRpathParser";
import { DateTimePrecisionContext } from "./FHIRpathParser";
import { PluralDateTimePrecisionContext } from "./FHIRpathParser";
import { TypeSpecifierContext } from "./FHIRpathParser";
import { QualifiedIdentifierContext } from "./FHIRpathParser";
import { IdentifierContext } from "./FHIRpathParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FHIRpathParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FHIRpathVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `termExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTermExpression?: (ctx: TermExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `invocationExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvocationExpression?: (ctx: InvocationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `indexerExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexerExpression?: (ctx: IndexerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `polarityExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPolarityExpression?: (ctx: PolarityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `multiplicativeExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `additiveExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `unionExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionExpression?: (ctx: UnionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `inequalityExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInequalityExpression?: (ctx: InequalityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeExpression?: (ctx: TypeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `equalityExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `membershipExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMembershipExpression?: (ctx: MembershipExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `andExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `orExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpression?: (ctx: OrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `impliesExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImpliesExpression?: (ctx: ImpliesExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberLiteral?: (ctx: NumberLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `dateTimeLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateTimeLiteral?: (ctx: DateTimeLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeLiteral?: (ctx: TimeLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `quantityLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantityLiteral?: (ctx: QuantityLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `memberInvocation`
	 * labeled alternative in `FHIRpathParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberInvocation?: (ctx: MemberInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionInvocation`
	 * labeled alternative in `FHIRpathParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionInvocation?: (ctx: FunctionInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `thisInvocation`
	 * labeled alternative in `FHIRpathParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisInvocation?: (ctx: ThisInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `invocationTerm`
	 * labeled alternative in `FHIRpathParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvocationTerm?: (ctx: InvocationTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `literalTerm`
	 * labeled alternative in `FHIRpathParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralTerm?: (ctx: LiteralTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `externalConstantTerm`
	 * labeled alternative in `FHIRpathParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalConstantTerm?: (ctx: ExternalConstantTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedTerm`
	 * labeled alternative in `FHIRpathParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedTerm?: (ctx: ParenthesizedTermContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRpathParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRpathParser.externalConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalConstant?: (ctx: ExternalConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRpathParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvocation?: (ctx: InvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRpathParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRpathParser.paramList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamList?: (ctx: ParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRpathParser.quantity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantity?: (ctx: QuantityContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRpathParser.unit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnit?: (ctx: UnitContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRpathParser.dateTimePrecision`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateTimePrecision?: (ctx: DateTimePrecisionContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRpathParser.pluralDateTimePrecision`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPluralDateTimePrecision?: (ctx: PluralDateTimePrecisionContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRpathParser.typeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSpecifier?: (ctx: TypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRpathParser.qualifiedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedIdentifier?: (ctx: QualifiedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FHIRpathParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

