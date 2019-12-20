// Generated from FHIRpath.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { FHIRpathListener } from "./FHIRpathListener";
import { FHIRpathVisitor } from "./FHIRpathVisitor";


export class FHIRpathParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly DATETIME = 53;
	public static readonly TIME = 54;
	public static readonly IDENTIFIER = 55;
	public static readonly QUOTEDIDENTIFIER = 56;
	public static readonly STRING = 57;
	public static readonly NUMBER = 58;
	public static readonly WS = 59;
	public static readonly COMMENT = 60;
	public static readonly LINE_COMMENT = 61;
	public static readonly RULE_expression = 0;
	public static readonly RULE_term = 1;
	public static readonly RULE_literal = 2;
	public static readonly RULE_externalConstant = 3;
	public static readonly RULE_invocation = 4;
	public static readonly RULE_function = 5;
	public static readonly RULE_paramList = 6;
	public static readonly RULE_quantity = 7;
	public static readonly RULE_unit = 8;
	public static readonly RULE_dateTimePrecision = 9;
	public static readonly RULE_pluralDateTimePrecision = 10;
	public static readonly RULE_typeSpecifier = 11;
	public static readonly RULE_qualifiedIdentifier = 12;
	public static readonly RULE_identifier = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expression", "term", "literal", "externalConstant", "invocation", "function", 
		"paramList", "quantity", "unit", "dateTimePrecision", "pluralDateTimePrecision", 
		"typeSpecifier", "qualifiedIdentifier", "identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'['", "']'", "'+'", "'-'", "'*'", "'/'", "'div'", "'mod'", 
		"'&'", "'|'", "'<='", "'<'", "'>'", "'>='", "'is'", "'as'", "'='", "'~'", 
		"'!='", "'!~'", "'in'", "'contains'", "'and'", "'or'", "'xor'", "'implies'", 
		"'('", "')'", "'{'", "'}'", "'true'", "'false'", "'%'", "'$this'", "','", 
		"'year'", "'month'", "'week'", "'day'", "'hour'", "'minute'", "'second'", 
		"'millisecond'", "'years'", "'months'", "'weeks'", "'days'", "'hours'", 
		"'minutes'", "'seconds'", "'milliseconds'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "DATETIME", "TIME", "IDENTIFIER", 
		"QUOTEDIDENTIFIER", "STRING", "NUMBER", "WS", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FHIRpathParser._LITERAL_NAMES, FHIRpathParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FHIRpathParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FHIRpath.g4"; }

	// @Override
	public get ruleNames(): string[] { return FHIRpathParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FHIRpathParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FHIRpathParser._ATN, this);
	}
	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 0;
		this.enterRecursionRule(_localctx, 0, FHIRpathParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FHIRpathParser.T__15:
			case FHIRpathParser.T__16:
			case FHIRpathParser.T__27:
			case FHIRpathParser.T__29:
			case FHIRpathParser.T__31:
			case FHIRpathParser.T__32:
			case FHIRpathParser.T__33:
			case FHIRpathParser.T__34:
			case FHIRpathParser.DATETIME:
			case FHIRpathParser.TIME:
			case FHIRpathParser.IDENTIFIER:
			case FHIRpathParser.QUOTEDIDENTIFIER:
			case FHIRpathParser.STRING:
			case FHIRpathParser.NUMBER:
				{
				_localctx = new TermExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 29;
				this.term();
				}
				break;
			case FHIRpathParser.T__3:
			case FHIRpathParser.T__4:
				{
				_localctx = new PolarityExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 30;
				_la = this._input.LA(1);
				if (!(_la === FHIRpathParser.T__3 || _la === FHIRpathParser.T__4)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 31;
				this.expression(11);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 74;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 72;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRpathParser.RULE_expression);
						this.state = 34;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 35;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRpathParser.T__5) | (1 << FHIRpathParser.T__6) | (1 << FHIRpathParser.T__7) | (1 << FHIRpathParser.T__8))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 36;
						this.expression(11);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRpathParser.RULE_expression);
						this.state = 37;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 38;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRpathParser.T__3) | (1 << FHIRpathParser.T__4) | (1 << FHIRpathParser.T__9))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 39;
						this.expression(10);
						}
						break;

					case 3:
						{
						_localctx = new UnionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRpathParser.RULE_expression);
						this.state = 40;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 41;
						this.match(FHIRpathParser.T__10);
						this.state = 42;
						this.expression(9);
						}
						break;

					case 4:
						{
						_localctx = new InequalityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRpathParser.RULE_expression);
						this.state = 43;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 44;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRpathParser.T__11) | (1 << FHIRpathParser.T__12) | (1 << FHIRpathParser.T__13) | (1 << FHIRpathParser.T__14))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 45;
						this.expression(8);
						}
						break;

					case 5:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRpathParser.RULE_expression);
						this.state = 46;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 47;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRpathParser.T__17) | (1 << FHIRpathParser.T__18) | (1 << FHIRpathParser.T__19) | (1 << FHIRpathParser.T__20))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 48;
						this.expression(6);
						}
						break;

					case 6:
						{
						_localctx = new MembershipExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRpathParser.RULE_expression);
						this.state = 49;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 50;
						_la = this._input.LA(1);
						if (!(_la === FHIRpathParser.T__21 || _la === FHIRpathParser.T__22)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 51;
						this.expression(5);
						}
						break;

					case 7:
						{
						_localctx = new AndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRpathParser.RULE_expression);
						this.state = 52;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 53;
						this.match(FHIRpathParser.T__23);
						this.state = 54;
						this.expression(4);
						}
						break;

					case 8:
						{
						_localctx = new OrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRpathParser.RULE_expression);
						this.state = 55;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 56;
						_la = this._input.LA(1);
						if (!(_la === FHIRpathParser.T__24 || _la === FHIRpathParser.T__25)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 57;
						this.expression(3);
						}
						break;

					case 9:
						{
						_localctx = new ImpliesExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRpathParser.RULE_expression);
						this.state = 58;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 59;
						this.match(FHIRpathParser.T__26);
						this.state = 60;
						this.expression(2);
						}
						break;

					case 10:
						{
						_localctx = new InvocationExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRpathParser.RULE_expression);
						this.state = 61;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 62;
						this.match(FHIRpathParser.T__0);
						this.state = 63;
						this.invocation();
						}
						break;

					case 11:
						{
						_localctx = new IndexerExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRpathParser.RULE_expression);
						this.state = 64;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 65;
						this.match(FHIRpathParser.T__1);
						this.state = 66;
						this.expression(0);
						this.state = 67;
						this.match(FHIRpathParser.T__2);
						}
						break;

					case 12:
						{
						_localctx = new TypeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FHIRpathParser.RULE_expression);
						this.state = 69;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 70;
						_la = this._input.LA(1);
						if (!(_la === FHIRpathParser.T__15 || _la === FHIRpathParser.T__16)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 71;
						this.typeSpecifier();
						}
						break;
					}
					}
				}
				this.state = 76;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FHIRpathParser.RULE_term);
		try {
			this.state = 84;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FHIRpathParser.T__15:
			case FHIRpathParser.T__16:
			case FHIRpathParser.T__34:
			case FHIRpathParser.IDENTIFIER:
			case FHIRpathParser.QUOTEDIDENTIFIER:
				_localctx = new InvocationTermContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 77;
				this.invocation();
				}
				break;
			case FHIRpathParser.T__29:
			case FHIRpathParser.T__31:
			case FHIRpathParser.T__32:
			case FHIRpathParser.DATETIME:
			case FHIRpathParser.TIME:
			case FHIRpathParser.STRING:
			case FHIRpathParser.NUMBER:
				_localctx = new LiteralTermContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 78;
				this.literal();
				}
				break;
			case FHIRpathParser.T__33:
				_localctx = new ExternalConstantTermContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 79;
				this.externalConstant();
				}
				break;
			case FHIRpathParser.T__27:
				_localctx = new ParenthesizedTermContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 80;
				this.match(FHIRpathParser.T__27);
				this.state = 81;
				this.expression(0);
				this.state = 82;
				this.match(FHIRpathParser.T__28);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FHIRpathParser.RULE_literal);
		let _la: number;
		try {
			this.state = 94;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 86;
				this.match(FHIRpathParser.T__29);
				this.state = 87;
				this.match(FHIRpathParser.T__30);
				}
				break;

			case 2:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 88;
				_la = this._input.LA(1);
				if (!(_la === FHIRpathParser.T__31 || _la === FHIRpathParser.T__32)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 3:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 89;
				this.match(FHIRpathParser.STRING);
				}
				break;

			case 4:
				_localctx = new NumberLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 90;
				this.match(FHIRpathParser.NUMBER);
				}
				break;

			case 5:
				_localctx = new DateTimeLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 91;
				this.match(FHIRpathParser.DATETIME);
				}
				break;

			case 6:
				_localctx = new TimeLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 92;
				this.match(FHIRpathParser.TIME);
				}
				break;

			case 7:
				_localctx = new QuantityLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 93;
				this.quantity();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public externalConstant(): ExternalConstantContext {
		let _localctx: ExternalConstantContext = new ExternalConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FHIRpathParser.RULE_externalConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.match(FHIRpathParser.T__33);
			this.state = 97;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public invocation(): InvocationContext {
		let _localctx: InvocationContext = new InvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FHIRpathParser.RULE_invocation);
		try {
			this.state = 102;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				_localctx = new MemberInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 99;
				this.identifier();
				}
				break;

			case 2:
				_localctx = new FunctionInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 100;
				this.function();
				}
				break;

			case 3:
				_localctx = new ThisInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 101;
				this.match(FHIRpathParser.T__34);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FHIRpathParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.identifier();
			this.state = 105;
			this.match(FHIRpathParser.T__27);
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FHIRpathParser.T__3) | (1 << FHIRpathParser.T__4) | (1 << FHIRpathParser.T__15) | (1 << FHIRpathParser.T__16) | (1 << FHIRpathParser.T__27) | (1 << FHIRpathParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FHIRpathParser.T__31 - 32)) | (1 << (FHIRpathParser.T__32 - 32)) | (1 << (FHIRpathParser.T__33 - 32)) | (1 << (FHIRpathParser.T__34 - 32)) | (1 << (FHIRpathParser.DATETIME - 32)) | (1 << (FHIRpathParser.TIME - 32)) | (1 << (FHIRpathParser.IDENTIFIER - 32)) | (1 << (FHIRpathParser.QUOTEDIDENTIFIER - 32)) | (1 << (FHIRpathParser.STRING - 32)) | (1 << (FHIRpathParser.NUMBER - 32)))) !== 0)) {
				{
				this.state = 106;
				this.paramList();
				}
			}

			this.state = 109;
			this.match(FHIRpathParser.T__28);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FHIRpathParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.expression(0);
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FHIRpathParser.T__35) {
				{
				{
				this.state = 112;
				this.match(FHIRpathParser.T__35);
				this.state = 113;
				this.expression(0);
				}
				}
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantity(): QuantityContext {
		let _localctx: QuantityContext = new QuantityContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FHIRpathParser.RULE_quantity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.match(FHIRpathParser.NUMBER);
			this.state = 121;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 120;
				this.unit();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unit(): UnitContext {
		let _localctx: UnitContext = new UnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FHIRpathParser.RULE_unit);
		try {
			this.state = 126;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FHIRpathParser.T__36:
			case FHIRpathParser.T__37:
			case FHIRpathParser.T__38:
			case FHIRpathParser.T__39:
			case FHIRpathParser.T__40:
			case FHIRpathParser.T__41:
			case FHIRpathParser.T__42:
			case FHIRpathParser.T__43:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 123;
				this.dateTimePrecision();
				}
				break;
			case FHIRpathParser.T__44:
			case FHIRpathParser.T__45:
			case FHIRpathParser.T__46:
			case FHIRpathParser.T__47:
			case FHIRpathParser.T__48:
			case FHIRpathParser.T__49:
			case FHIRpathParser.T__50:
			case FHIRpathParser.T__51:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 124;
				this.pluralDateTimePrecision();
				}
				break;
			case FHIRpathParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 125;
				this.match(FHIRpathParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateTimePrecision(): DateTimePrecisionContext {
		let _localctx: DateTimePrecisionContext = new DateTimePrecisionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FHIRpathParser.RULE_dateTimePrecision);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			_la = this._input.LA(1);
			if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (FHIRpathParser.T__36 - 37)) | (1 << (FHIRpathParser.T__37 - 37)) | (1 << (FHIRpathParser.T__38 - 37)) | (1 << (FHIRpathParser.T__39 - 37)) | (1 << (FHIRpathParser.T__40 - 37)) | (1 << (FHIRpathParser.T__41 - 37)) | (1 << (FHIRpathParser.T__42 - 37)) | (1 << (FHIRpathParser.T__43 - 37)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pluralDateTimePrecision(): PluralDateTimePrecisionContext {
		let _localctx: PluralDateTimePrecisionContext = new PluralDateTimePrecisionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FHIRpathParser.RULE_pluralDateTimePrecision);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			_la = this._input.LA(1);
			if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (FHIRpathParser.T__44 - 45)) | (1 << (FHIRpathParser.T__45 - 45)) | (1 << (FHIRpathParser.T__46 - 45)) | (1 << (FHIRpathParser.T__47 - 45)) | (1 << (FHIRpathParser.T__48 - 45)) | (1 << (FHIRpathParser.T__49 - 45)) | (1 << (FHIRpathParser.T__50 - 45)) | (1 << (FHIRpathParser.T__51 - 45)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpecifier(): TypeSpecifierContext {
		let _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FHIRpathParser.RULE_typeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.qualifiedIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedIdentifier(): QualifiedIdentifierContext {
		let _localctx: QualifiedIdentifierContext = new QualifiedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FHIRpathParser.RULE_qualifiedIdentifier);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.identifier();
			this.state = 139;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 135;
					this.match(FHIRpathParser.T__0);
					this.state = 136;
					this.identifier();
					}
					}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FHIRpathParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			_la = this._input.LA(1);
			if (!(_la === FHIRpathParser.T__15 || _la === FHIRpathParser.T__16 || _la === FHIRpathParser.IDENTIFIER || _la === FHIRpathParser.QUOTEDIDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 0:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);

		case 1:
			return this.precpred(this._ctx, 9);

		case 2:
			return this.precpred(this._ctx, 8);

		case 3:
			return this.precpred(this._ctx, 7);

		case 4:
			return this.precpred(this._ctx, 5);

		case 5:
			return this.precpred(this._ctx, 4);

		case 6:
			return this.precpred(this._ctx, 3);

		case 7:
			return this.precpred(this._ctx, 2);

		case 8:
			return this.precpred(this._ctx, 1);

		case 9:
			return this.precpred(this._ctx, 13);

		case 10:
			return this.precpred(this._ctx, 12);

		case 11:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03?\x93\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02#\n\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x07\x02K\n\x02\f\x02\x0E\x02N\v\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03W\n\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04a\n\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x05\x06i\n\x06\x03\x07\x03\x07\x03" +
		"\x07\x05\x07n\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x07\bu\n\b\f\b\x0E" +
		"\bx\v\b\x03\t\x03\t\x05\t|\n\t\x03\n\x03\n\x03\n\x05\n\x81\n\n\x03\v\x03" +
		"\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\x8C\n\x0E\f" +
		"\x0E\x0E\x0E\x8F\v\x0E\x03\x0F\x03\x0F\x03\x0F\x02\x02\x03\x02\x10\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x0E\x03\x02\x06\x07\x03\x02\b\v\x04" +
		"\x02\x06\x07\f\f\x03\x02\x0E\x11\x03\x02\x14\x17\x03\x02\x18\x19\x03\x02" +
		"\x1B\x1C\x03\x02\x12\x13\x03\x02\"#\x03\x02\'.\x03\x02/6\x04\x02\x12\x13" +
		"9:\x02\xA2\x02\"\x03\x02\x02\x02\x04V\x03\x02\x02\x02\x06`\x03\x02\x02" +
		"\x02\bb\x03\x02\x02\x02\nh\x03\x02\x02\x02\fj\x03\x02\x02\x02\x0Eq\x03" +
		"\x02\x02\x02\x10y\x03\x02\x02\x02\x12\x80\x03\x02\x02\x02\x14\x82\x03" +
		"\x02\x02\x02\x16\x84\x03\x02\x02\x02\x18\x86\x03\x02\x02\x02\x1A\x88\x03" +
		"\x02\x02\x02\x1C\x90\x03\x02\x02\x02\x1E\x1F\b\x02\x01\x02\x1F#\x05\x04" +
		"\x03\x02 !\t\x02\x02\x02!#\x05\x02\x02\r\"\x1E\x03\x02\x02\x02\" \x03" +
		"\x02\x02\x02#L\x03\x02\x02\x02$%\f\f\x02\x02%&\t\x03\x02\x02&K\x05\x02" +
		"\x02\r\'(\f\v\x02\x02()\t\x04\x02\x02)K\x05\x02\x02\f*+\f\n\x02\x02+," +
		"\x07\r\x02\x02,K\x05\x02\x02\v-.\f\t\x02\x02./\t\x05\x02\x02/K\x05\x02" +
		"\x02\n01\f\x07\x02\x0212\t\x06\x02\x022K\x05\x02\x02\b34\f\x06\x02\x02" +
		"45\t\x07\x02\x025K\x05\x02\x02\x0767\f\x05\x02\x0278\x07\x1A\x02\x028" +
		"K\x05\x02\x02\x069:\f\x04\x02\x02:;\t\b\x02\x02;K\x05\x02\x02\x05<=\f" +
		"\x03\x02\x02=>\x07\x1D\x02\x02>K\x05\x02\x02\x04?@\f\x0F\x02\x02@A\x07" +
		"\x03\x02\x02AK\x05\n\x06\x02BC\f\x0E\x02\x02CD\x07\x04\x02\x02DE\x05\x02" +
		"\x02\x02EF\x07\x05\x02\x02FK\x03\x02\x02\x02GH\f\b\x02\x02HI\t\t\x02\x02" +
		"IK\x05\x18\r\x02J$\x03\x02\x02\x02J\'\x03\x02\x02\x02J*\x03\x02\x02\x02" +
		"J-\x03\x02\x02\x02J0\x03\x02\x02\x02J3\x03\x02\x02\x02J6\x03\x02\x02\x02" +
		"J9\x03\x02\x02\x02J<\x03\x02\x02\x02J?\x03\x02\x02\x02JB\x03\x02\x02\x02" +
		"JG\x03\x02\x02\x02KN\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02\x02\x02" +
		"M\x03\x03\x02\x02\x02NL\x03\x02\x02\x02OW\x05\n\x06\x02PW\x05\x06\x04" +
		"\x02QW\x05\b\x05\x02RS\x07\x1E\x02\x02ST\x05\x02\x02\x02TU\x07\x1F\x02" +
		"\x02UW\x03\x02\x02\x02VO\x03\x02\x02\x02VP\x03\x02\x02\x02VQ\x03\x02\x02" +
		"\x02VR\x03\x02\x02\x02W\x05\x03\x02\x02\x02XY\x07 \x02\x02Ya\x07!\x02" +
		"\x02Za\t\n\x02\x02[a\x07;\x02\x02\\a\x07<\x02\x02]a\x077\x02\x02^a\x07" +
		"8\x02\x02_a\x05\x10\t\x02`X\x03\x02\x02\x02`Z\x03\x02\x02\x02`[\x03\x02" +
		"\x02\x02`\\\x03\x02\x02\x02`]\x03\x02\x02\x02`^\x03\x02\x02\x02`_\x03" +
		"\x02\x02\x02a\x07\x03\x02\x02\x02bc\x07$\x02\x02cd\x05\x1C\x0F\x02d\t" +
		"\x03\x02\x02\x02ei\x05\x1C\x0F\x02fi\x05\f\x07\x02gi\x07%\x02\x02he\x03" +
		"\x02\x02\x02hf\x03\x02\x02\x02hg\x03\x02\x02\x02i\v\x03\x02\x02\x02jk" +
		"\x05\x1C\x0F\x02km\x07\x1E\x02\x02ln\x05\x0E\b\x02ml\x03\x02\x02\x02m" +
		"n\x03\x02\x02\x02no\x03\x02\x02\x02op\x07\x1F\x02\x02p\r\x03\x02\x02\x02" +
		"qv\x05\x02\x02\x02rs\x07&\x02\x02su\x05\x02\x02\x02tr\x03\x02\x02\x02" +
		"ux\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02w\x0F\x03\x02\x02" +
		"\x02xv\x03\x02\x02\x02y{\x07<\x02\x02z|\x05\x12\n\x02{z\x03\x02\x02\x02" +
		"{|\x03\x02\x02\x02|\x11\x03\x02\x02\x02}\x81\x05\x14\v\x02~\x81\x05\x16" +
		"\f\x02\x7F\x81\x07;\x02\x02\x80}\x03\x02\x02\x02\x80~\x03\x02\x02\x02" +
		"\x80\x7F\x03\x02\x02\x02\x81\x13\x03\x02\x02\x02\x82\x83\t\v\x02\x02\x83" +
		"\x15\x03\x02\x02\x02\x84\x85\t\f\x02\x02\x85\x17\x03\x02\x02\x02\x86\x87" +
		"\x05\x1A\x0E\x02\x87\x19\x03\x02\x02\x02\x88\x8D\x05\x1C\x0F\x02\x89\x8A" +
		"\x07\x03\x02\x02\x8A\x8C\x05\x1C\x0F\x02\x8B\x89\x03\x02\x02\x02\x8C\x8F" +
		"\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x1B" +
		"\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x90\x91\t\r\x02\x02\x91\x1D\x03" +
		"\x02\x02\x02\r\"JLV`hmv{\x80\x8D";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FHIRpathParser.__ATN) {
			FHIRpathParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FHIRpathParser._serializedATN));
		}

		return FHIRpathParser.__ATN;
	}

}

export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRpathParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class TermExpressionContext extends ExpressionContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterTermExpression) {
			listener.enterTermExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitTermExpression) {
			listener.exitTermExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitTermExpression) {
			return visitor.visitTermExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InvocationExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public invocation(): InvocationContext {
		return this.getRuleContext(0, InvocationContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterInvocationExpression) {
			listener.enterInvocationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitInvocationExpression) {
			listener.exitInvocationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitInvocationExpression) {
			return visitor.visitInvocationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexerExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterIndexerExpression) {
			listener.enterIndexerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitIndexerExpression) {
			listener.exitIndexerExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitIndexerExpression) {
			return visitor.visitIndexerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PolarityExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterPolarityExpression) {
			listener.enterPolarityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitPolarityExpression) {
			listener.exitPolarityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitPolarityExpression) {
			return visitor.visitPolarityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnionExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterUnionExpression) {
			listener.enterUnionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitUnionExpression) {
			listener.exitUnionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitUnionExpression) {
			return visitor.visitUnionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InequalityExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterInequalityExpression) {
			listener.enterInequalityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitInequalityExpression) {
			listener.exitInequalityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitInequalityExpression) {
			return visitor.visitInequalityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterTypeExpression) {
			listener.enterTypeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitTypeExpression) {
			listener.exitTypeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitTypeExpression) {
			return visitor.visitTypeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MembershipExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterMembershipExpression) {
			listener.enterMembershipExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitMembershipExpression) {
			listener.exitMembershipExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitMembershipExpression) {
			return visitor.visitMembershipExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterOrExpression) {
			listener.enterOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitOrExpression) {
			listener.exitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitOrExpression) {
			return visitor.visitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImpliesExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterImpliesExpression) {
			listener.enterImpliesExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitImpliesExpression) {
			listener.exitImpliesExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitImpliesExpression) {
			return visitor.visitImpliesExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRpathParser.RULE_term; }
	public copyFrom(ctx: TermContext): void {
		super.copyFrom(ctx);
	}
}
export class InvocationTermContext extends TermContext {
	public invocation(): InvocationContext {
		return this.getRuleContext(0, InvocationContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterInvocationTerm) {
			listener.enterInvocationTerm(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitInvocationTerm) {
			listener.exitInvocationTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitInvocationTerm) {
			return visitor.visitInvocationTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralTermContext extends TermContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterLiteralTerm) {
			listener.enterLiteralTerm(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitLiteralTerm) {
			listener.exitLiteralTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitLiteralTerm) {
			return visitor.visitLiteralTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExternalConstantTermContext extends TermContext {
	public externalConstant(): ExternalConstantContext {
		return this.getRuleContext(0, ExternalConstantContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterExternalConstantTerm) {
			listener.enterExternalConstantTerm(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitExternalConstantTerm) {
			listener.exitExternalConstantTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitExternalConstantTerm) {
			return visitor.visitExternalConstantTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedTermContext extends TermContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterParenthesizedTerm) {
			listener.enterParenthesizedTerm(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitParenthesizedTerm) {
			listener.exitParenthesizedTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitParenthesizedTerm) {
			return visitor.visitParenthesizedTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRpathParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class NullLiteralContext extends LiteralContext {
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterNullLiteral) {
			listener.enterNullLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitNullLiteral) {
			listener.exitNullLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitNullLiteral) {
			return visitor.visitNullLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralContext extends LiteralContext {
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends LiteralContext {
	public STRING(): TerminalNode { return this.getToken(FHIRpathParser.STRING, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberLiteralContext extends LiteralContext {
	public NUMBER(): TerminalNode { return this.getToken(FHIRpathParser.NUMBER, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterNumberLiteral) {
			listener.enterNumberLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitNumberLiteral) {
			listener.exitNumberLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitNumberLiteral) {
			return visitor.visitNumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateTimeLiteralContext extends LiteralContext {
	public DATETIME(): TerminalNode { return this.getToken(FHIRpathParser.DATETIME, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterDateTimeLiteral) {
			listener.enterDateTimeLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitDateTimeLiteral) {
			listener.exitDateTimeLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitDateTimeLiteral) {
			return visitor.visitDateTimeLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimeLiteralContext extends LiteralContext {
	public TIME(): TerminalNode { return this.getToken(FHIRpathParser.TIME, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterTimeLiteral) {
			listener.enterTimeLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitTimeLiteral) {
			listener.exitTimeLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitTimeLiteral) {
			return visitor.visitTimeLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuantityLiteralContext extends LiteralContext {
	public quantity(): QuantityContext {
		return this.getRuleContext(0, QuantityContext);
	}
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterQuantityLiteral) {
			listener.enterQuantityLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitQuantityLiteral) {
			listener.exitQuantityLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitQuantityLiteral) {
			return visitor.visitQuantityLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternalConstantContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRpathParser.RULE_externalConstant; }
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterExternalConstant) {
			listener.enterExternalConstant(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitExternalConstant) {
			listener.exitExternalConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitExternalConstant) {
			return visitor.visitExternalConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InvocationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRpathParser.RULE_invocation; }
	public copyFrom(ctx: InvocationContext): void {
		super.copyFrom(ctx);
	}
}
export class MemberInvocationContext extends InvocationContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: InvocationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterMemberInvocation) {
			listener.enterMemberInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitMemberInvocation) {
			listener.exitMemberInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitMemberInvocation) {
			return visitor.visitMemberInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionInvocationContext extends InvocationContext {
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	constructor(ctx: InvocationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterFunctionInvocation) {
			listener.enterFunctionInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitFunctionInvocation) {
			listener.exitFunctionInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitFunctionInvocation) {
			return visitor.visitFunctionInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThisInvocationContext extends InvocationContext {
	constructor(ctx: InvocationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterThisInvocation) {
			listener.enterThisInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitThisInvocation) {
			listener.exitThisInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitThisInvocation) {
			return visitor.visitThisInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRpathParser.RULE_function; }
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRpathParser.RULE_paramList; }
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterParamList) {
			listener.enterParamList(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitParamList) {
			listener.exitParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitParamList) {
			return visitor.visitParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantityContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(FHIRpathParser.NUMBER, 0); }
	public unit(): UnitContext | undefined {
		return this.tryGetRuleContext(0, UnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRpathParser.RULE_quantity; }
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterQuantity) {
			listener.enterQuantity(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitQuantity) {
			listener.exitQuantity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitQuantity) {
			return visitor.visitQuantity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitContext extends ParserRuleContext {
	public dateTimePrecision(): DateTimePrecisionContext | undefined {
		return this.tryGetRuleContext(0, DateTimePrecisionContext);
	}
	public pluralDateTimePrecision(): PluralDateTimePrecisionContext | undefined {
		return this.tryGetRuleContext(0, PluralDateTimePrecisionContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FHIRpathParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRpathParser.RULE_unit; }
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterUnit) {
			listener.enterUnit(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitUnit) {
			listener.exitUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitUnit) {
			return visitor.visitUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateTimePrecisionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRpathParser.RULE_dateTimePrecision; }
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterDateTimePrecision) {
			listener.enterDateTimePrecision(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitDateTimePrecision) {
			listener.exitDateTimePrecision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitDateTimePrecision) {
			return visitor.visitDateTimePrecision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PluralDateTimePrecisionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRpathParser.RULE_pluralDateTimePrecision; }
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterPluralDateTimePrecision) {
			listener.enterPluralDateTimePrecision(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitPluralDateTimePrecision) {
			listener.exitPluralDateTimePrecision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitPluralDateTimePrecision) {
			return visitor.visitPluralDateTimePrecision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecifierContext extends ParserRuleContext {
	public qualifiedIdentifier(): QualifiedIdentifierContext {
		return this.getRuleContext(0, QualifiedIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRpathParser.RULE_typeSpecifier; }
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterTypeSpecifier) {
			listener.enterTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitTypeSpecifier) {
			listener.exitTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitTypeSpecifier) {
			return visitor.visitTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRpathParser.RULE_qualifiedIdentifier; }
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterQualifiedIdentifier) {
			listener.enterQualifiedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitQualifiedIdentifier) {
			listener.exitQualifiedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitQualifiedIdentifier) {
			return visitor.visitQualifiedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(FHIRpathParser.IDENTIFIER, 0); }
	public QUOTEDIDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(FHIRpathParser.QUOTEDIDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FHIRpathParser.RULE_identifier; }
	// @Override
	public enterRule(listener: FHIRpathListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FHIRpathListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FHIRpathVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


