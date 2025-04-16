"use server";
import type { NextRequest } from "next/server";
/**
 * @description
 * クイズの配列
 */
export type QuizQuestions = QuizQuestion[];
/**
 * @description
 * クイズオブジェクト
 * @property
 * question 問題文
 *
 * options 選択肢
 *
 * answer 正解の選択肢番号
 */
export type QuizQuestion = {
	question: string;
	options: Option[];
	answer: number;
};
/**
 * @description
 * 選択肢オブジェクト
 * @property
 * id 選択肢番号
 *
 * text 選択肢文字列
 */
export type Option = {
	id: number;
	text: string;
};
// クイズのモックデータ

const mockQuizQuestions: QuizQuestions = [
	{
		question: "川の長さはの作者は誰でしょう",
		options: [
			{ id: 1, text: "福井晴敏" },
			{ id: 2, text: "百田尚樹" },
			{ id: 3, text: "辻村美月" },
			{ id: 4, text: "山田徹" },
		],
		answer: 1,
	},
	{
		question: "地球上で最も高い山はどれですか？",
		options: [
			{ id: 1, text: "エベレスト" },
			{ id: 2, text: "キリマンジャロ" },
			{ id: 3, text: "モンブラン" },
			{ id: 4, text: "アコンカグア" },
		],
		answer: 1,
	},
	{
		question: "太陽系で最も大きい惑星はどれですか？",
		options: [
			{ id: 1, text: "地球" },
			{ id: 2, text: "火星" },
			{ id: 3, text: "木星" },
			{ id: 4, text: "土星" },
		],
		answer: 3,
	},
	{
		question: "ピカソはどの芸術運動に関連していますか？",
		options: [
			{ id: 1, text: "印象派" },
			{ id: 2, text: "キュビスム" },
			{ id: 3, text: "バロック" },
			{ id: 4, text: "シュルレアリスム" },
		],
		answer: 2,
	},
	{
		question: "日本で最も人口が多い都道府県はどれですか？",
		options: [
			{ id: 1, text: "大阪府" },
			{ id: 2, text: "北海道" },
			{ id: 3, text: "東京都" },
			{ id: 4, text: "愛知県" },
		],
		answer: 3,
	},
	{
		question: "イギリスの国旗は通称何と呼ばれていますか？",
		options: [
			{ id: 1, text: "ユニオンジャック" },
			{ id: 2, text: "スターズアンドストライプス" },
			{ id: 3, text: "トライカラー" },
			{ id: 4, text: "ハンマーアンドシックル" },
		],
		answer: 1,
	},
	{
		question: "アインシュタインが提唱した有名な方程式は？",
		options: [
			{ id: 1, text: "F=ma" },
			{ id: 2, text: "E=mc²" },
			{ id: 3, text: "V=IR" },
			{ id: 4, text: "a²+b²=c²" },
		],
		answer: 2,
	},
	{
		question: "ポケモンシリーズで最初に登場する主人公の相棒は？",
		options: [
			{ id: 1, text: "ピカチュウ" },
			{ id: 2, text: "ゼニガメ" },
			{ id: 3, text: "ヒトカゲ" },
			{ id: 4, text: "フシギダネ" },
		],
		answer: 1,
	},
	{
		question: "北米大陸を初めて横断した探検家は誰でしょう？",
		options: [
			{ id: 1, text: "コロンブス" },
			{ id: 2, text: "ルイスとクラーク" },
			{ id: 3, text: "マゼラン" },
			{ id: 4, text: "アムンセン" },
		],
		answer: 2,
	},
	{
		question: "エレクトロニクス企業「ソニー」の本社はどこにありますか？",
		options: [
			{ id: 1, text: "大阪" },
			{ id: 2, text: "京都" },
			{ id: 3, text: "東京" },
			{ id: 4, text: "神戸" },
		],
		answer: 3,
	},
];

export async function GET(request: NextRequest) {
	const url = request.nextUrl;
	const searchParams = url.searchParams;
	const quizType = searchParams.get("quiz_type"); // NOTE: 0 or 1にしておく。0ならみんなの、1なら個人のクイズ
	switch (quizType) {
		case "0": {
            // 全体から取得する
			return new Response(JSON.stringify(mockQuizQuestions), {
				status: 200,
				headers: { "Content-Type": "application/json" },
			});
		}
		case "1": {
            // TODO: クッキーなどからユーザーを割り出してその情報からクイズを取得してくる
			return new Response(JSON.stringify(mockQuizQuestions), {
				status: 200,
				headers: { "Content-Type": "application/json" },
			});
		}
		default: {
			throw new Error();
		}
	}
}
