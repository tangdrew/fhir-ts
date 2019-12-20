// Generated from FHIRpath.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `FHIRpathParser`.
 */
export interface FHIRpathListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `termExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTermExpression?: (ctx: TermExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `termExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTermExpression?: (ctx: TermExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `invocationExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInvocationExpression?: (ctx: InvocationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `invocationExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInvocationExpression?: (ctx: InvocationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `indexerExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIndexerExpression?: (ctx: IndexerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `indexerExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIndexerExpression?: (ctx: IndexerExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `polarityExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPolarityExpression?: (ctx: PolarityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `polarityExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPolarityExpression?: (ctx: PolarityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `multiplicativeExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `multiplicativeExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `additiveExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `additiveExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `unionExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnionExpression?: (ctx: UnionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `unionExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnionExpression?: (ctx: UnionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `inequalityExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInequalityExpression?: (ctx: InequalityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `inequalityExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInequalityExpression?: (ctx: InequalityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `typeExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTypeExpression?: (ctx: TypeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `typeExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTypeExpression?: (ctx: TypeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `equalityExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `equalityExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `membershipExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMembershipExpression?: (ctx: MembershipExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `membershipExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMembershipExpression?: (ctx: MembershipExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `andExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAndExpression?: (ctx: AndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `andExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAndExpression?: (ctx: AndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `orExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	enterOrExpression?: (ctx: OrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `orExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	exitOrExpression?: (ctx: OrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `impliesExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	enterImpliesExpression?: (ctx: ImpliesExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `impliesExpression`
	 * labeled alternative in `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	exitImpliesExpression?: (ctx: ImpliesExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `nullLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 */
	enterNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 */
	exitNullLiteral?: (ctx: NullLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `stringLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `numberLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 */
	enterNumberLiteral?: (ctx: NumberLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `numberLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 */
	exitNumberLiteral?: (ctx: NumberLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `dateTimeLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 */
	enterDateTimeLiteral?: (ctx: DateTimeLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `dateTimeLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 */
	exitDateTimeLiteral?: (ctx: DateTimeLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `timeLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 */
	enterTimeLiteral?: (ctx: TimeLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `timeLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 */
	exitTimeLiteral?: (ctx: TimeLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `quantityLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 */
	enterQuantityLiteral?: (ctx: QuantityLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `quantityLiteral`
	 * labeled alternative in `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 */
	exitQuantityLiteral?: (ctx: QuantityLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `memberInvocation`
	 * labeled alternative in `FHIRpathParser.invocation`.
	 * @param ctx the parse tree
	 */
	enterMemberInvocation?: (ctx: MemberInvocationContext) => void;
	/**
	 * Exit a parse tree produced by the `memberInvocation`
	 * labeled alternative in `FHIRpathParser.invocation`.
	 * @param ctx the parse tree
	 */
	exitMemberInvocation?: (ctx: MemberInvocationContext) => void;

	/**
	 * Enter a parse tree produced by the `functionInvocation`
	 * labeled alternative in `FHIRpathParser.invocation`.
	 * @param ctx the parse tree
	 */
	enterFunctionInvocation?: (ctx: FunctionInvocationContext) => void;
	/**
	 * Exit a parse tree produced by the `functionInvocation`
	 * labeled alternative in `FHIRpathParser.invocation`.
	 * @param ctx the parse tree
	 */
	exitFunctionInvocation?: (ctx: FunctionInvocationContext) => void;

	/**
	 * Enter a parse tree produced by the `thisInvocation`
	 * labeled alternative in `FHIRpathParser.invocation`.
	 * @param ctx the parse tree
	 */
	enterThisInvocation?: (ctx: ThisInvocationContext) => void;
	/**
	 * Exit a parse tree produced by the `thisInvocation`
	 * labeled alternative in `FHIRpathParser.invocation`.
	 * @param ctx the parse tree
	 */
	exitThisInvocation?: (ctx: ThisInvocationContext) => void;

	/**
	 * Enter a parse tree produced by the `invocationTerm`
	 * labeled alternative in `FHIRpathParser.term`.
	 * @param ctx the parse tree
	 */
	enterInvocationTerm?: (ctx: InvocationTermContext) => void;
	/**
	 * Exit a parse tree produced by the `invocationTerm`
	 * labeled alternative in `FHIRpathParser.term`.
	 * @param ctx the parse tree
	 */
	exitInvocationTerm?: (ctx: InvocationTermContext) => void;

	/**
	 * Enter a parse tree produced by the `literalTerm`
	 * labeled alternative in `FHIRpathParser.term`.
	 * @param ctx the parse tree
	 */
	enterLiteralTerm?: (ctx: LiteralTermContext) => void;
	/**
	 * Exit a parse tree produced by the `literalTerm`
	 * labeled alternative in `FHIRpathParser.term`.
	 * @param ctx the parse tree
	 */
	exitLiteralTerm?: (ctx: LiteralTermContext) => void;

	/**
	 * Enter a parse tree produced by the `externalConstantTerm`
	 * labeled alternative in `FHIRpathParser.term`.
	 * @param ctx the parse tree
	 */
	enterExternalConstantTerm?: (ctx: ExternalConstantTermContext) => void;
	/**
	 * Exit a parse tree produced by the `externalConstantTerm`
	 * labeled alternative in `FHIRpathParser.term`.
	 * @param ctx the parse tree
	 */
	exitExternalConstantTerm?: (ctx: ExternalConstantTermContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesizedTerm`
	 * labeled alternative in `FHIRpathParser.term`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedTerm?: (ctx: ParenthesizedTermContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedTerm`
	 * labeled alternative in `FHIRpathParser.term`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedTerm?: (ctx: ParenthesizedTermContext) => void;

	/**
	 * Enter a parse tree produced by `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FHIRpathParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FHIRpathParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `FHIRpathParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `FHIRpathParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `FHIRpathParser.externalConstant`.
	 * @param ctx the parse tree
	 */
	enterExternalConstant?: (ctx: ExternalConstantContext) => void;
	/**
	 * Exit a parse tree produced by `FHIRpathParser.externalConstant`.
	 * @param ctx the parse tree
	 */
	exitExternalConstant?: (ctx: ExternalConstantContext) => void;

	/**
	 * Enter a parse tree produced by `FHIRpathParser.invocation`.
	 * @param ctx the parse tree
	 */
	enterInvocation?: (ctx: InvocationContext) => void;
	/**
	 * Exit a parse tree produced by `FHIRpathParser.invocation`.
	 * @param ctx the parse tree
	 */
	exitInvocation?: (ctx: InvocationContext) => void;

	/**
	 * Enter a parse tree produced by `FHIRpathParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `FHIRpathParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `FHIRpathParser.paramList`.
	 * @param ctx the parse tree
	 */
	enterParamList?: (ctx: ParamListContext) => void;
	/**
	 * Exit a parse tree produced by `FHIRpathParser.paramList`.
	 * @param ctx the parse tree
	 */
	exitParamList?: (ctx: ParamListContext) => void;

	/**
	 * Enter a parse tree produced by `FHIRpathParser.quantity`.
	 * @param ctx the parse tree
	 */
	enterQuantity?: (ctx: QuantityContext) => void;
	/**
	 * Exit a parse tree produced by `FHIRpathParser.quantity`.
	 * @param ctx the parse tree
	 */
	exitQuantity?: (ctx: QuantityContext) => void;

	/**
	 * Enter a parse tree produced by `FHIRpathParser.unit`.
	 * @param ctx the parse tree
	 */
	enterUnit?: (ctx: UnitContext) => void;
	/**
	 * Exit a parse tree produced by `FHIRpathParser.unit`.
	 * @param ctx the parse tree
	 */
	exitUnit?: (ctx: UnitContext) => void;

	/**
	 * Enter a parse tree produced by `FHIRpathParser.dateTimePrecision`.
	 * @param ctx the parse tree
	 */
	enterDateTimePrecision?: (ctx: DateTimePrecisionContext) => void;
	/**
	 * Exit a parse tree produced by `FHIRpathParser.dateTimePrecision`.
	 * @param ctx the parse tree
	 */
	exitDateTimePrecision?: (ctx: DateTimePrecisionContext) => void;

	/**
	 * Enter a parse tree produced by `FHIRpathParser.pluralDateTimePrecision`.
	 * @param ctx the parse tree
	 */
	enterPluralDateTimePrecision?: (ctx: PluralDateTimePrecisionContext) => void;
	/**
	 * Exit a parse tree produced by `FHIRpathParser.pluralDateTimePrecision`.
	 * @param ctx the parse tree
	 */
	exitPluralDateTimePrecision?: (ctx: PluralDateTimePrecisionContext) => void;

	/**
	 * Enter a parse tree produced by `FHIRpathParser.typeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTypeSpecifier?: (ctx: TypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `FHIRpathParser.typeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTypeSpecifier?: (ctx: TypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `FHIRpathParser.qualifiedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterQualifiedIdentifier?: (ctx: QualifiedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `FHIRpathParser.qualifiedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitQualifiedIdentifier?: (ctx: QualifiedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `FHIRpathParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `FHIRpathParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

