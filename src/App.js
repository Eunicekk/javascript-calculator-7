import { Console } from "@woowacourse/mission-utils";

class App {
	async run() {
		// 문자열 입력 기능 구현
		Console.print("덧셈할 문자열을 입력해 주세요.");
		const input = await Console.readLineAsync("");
	}

	// add: 입력 문자열에서 숫자를 분리하고 합산하는 메서드
	add(input) {
		// 빈 문자열 처리 기능 구현
		if (input === "") return 0;

		// 구분자 기준 문자열 처리 기능 구현
		const numbers = this.divide(input);

		// 숫자 유효성 검사 기능 구현

		// 숫자 합산 기능 구현
	}

	// divide: 입력 문자열을 구분자 기준으로 분리하는 메서드
	divide(input) {
		let separator = [",", ":"];
		let str = input;

		// 커스텀 구분자가 있는 경우
		if (input.startsWith("//")) {
			const endIndex = input.indexOf("\n");
			const customSeparator = input.subString(2, endIndex);
			separator.push(customSeparator);
			str = input.subString(endIndex + 1);
		}

		// 기본 구분자 및 커스텀 구분자 처리
		separator = separator.join("|");
		return str.split(new RegExp(`${separator}`)).map(Number);
	}
}

export default App;
