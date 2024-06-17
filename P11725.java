// 트리의 부모찾기
// https://www.acmicpc.net/problem/11725
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class P11725 {
	static int N; // 노드의 개수
	static int[] parentNode; // 부모노드
	static boolean[] isVisit; // 방문여부
	static StringTokenizer st;
	static ArrayList<Integer> list[]; // 노드저장

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		N = Integer.parseInt(br.readLine());
		isVisit = new boolean[N + 1];
		list = new ArrayList[N + 1];
		parentNode = new int[N + 1];

		for (int i = 0; i < N + 1; i++) {
			list[i] = new ArrayList<>();
		}

		// 연결된 노드 값들 입력받음
		for (int i = 0; i < N - 1; i++) {
			st = new StringTokenizer(br.readLine());
			int a = Integer.parseInt(st.nextToken()); // 첫번째 노드
			int b = Integer.parseInt(st.nextToken()); // 두번째 노드

			list[a].add(b); // 인접 리스트에 연결정보 추가
			list[b].add(a); // 무방향 그래프이므로 양쪽에 모두 추가
		}

		dfs(1); // 트리 루트는 1

		// 결과 출력
		for (int i = 2; i < parentNode.length; i++) {
			System.out.println(parentNode[i]);
		}

	}

	private static void dfs(int i) {
		isVisit[i] = true; // 방문 표시

		for (int a : list[i]) { // 현재 노드와 연결된 모든 노드에 대해
			if (!isVisit[a]) { // 방문하지 않은 경우
				parentNode[a] = i; // 부모 노드 설정
				dfs(a); // 재귀적으로 DFS 호출
			}
		}

	}
}
