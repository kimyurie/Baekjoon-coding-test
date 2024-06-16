public class Tree {

	int count; // 트리에 포함된 노드의 수

	public Tree() {
		count = 0;
	}

	public class Node {
		Object data; // 노드에 저장된 데이터
		Node left; // 왼쪽 자식 노드
		Node right; // 오른쪽 자식 노드

		// 데이터 받아 초기화하는 생성자
		public Node(Object data) {
			this.data = data;
			left = null;
			right = null;
		}

		public void addLeft(Node node) {
			left = node;
			count++;
		}

		public void addright(Node node) {
			right = node;
			count++;
		}

		public void deleteLeft() {
			left = null;
			count--;
		}

		public void deleteRight() {
			right = null;
			count--;
		}

		// 데이터 받아 새로운 노드를 생성하는 메서드
		public Node addNode(Object data) {
			Node n = new Node(data);
			return n;
		}

		// 주어진 노드를 시작으로 전위 순회를 수행하는 메서드
		public void preOrder(Node node) {
			if (node == null) {
				return;
			}

			// 현재 노드의 데이터 출력
			System.out.println(node.data + " ");

			// 왼쪽 서브트리 순회
			preOrder(node.left);

			// 오른쪽 서브트리 순회
			preOrder(node.right);
		}

		// 주어진 노드를 시작으로 중위 순회를 수행하는 메서드
		public void inOrder(Node node) {
			if (node == null) {
				return;
			}

			// 왼쪽 서브트리 순회
			inOrder(node.left);

			// 현재 노드의 데이터 출력
			System.out.println(node.data + " ");

			// 오른쪽 서브트리 순회
			inOrder(node.right);

		}

		public void postOrder(Node node) {
			if (node == null) {
				return;
			}

			postOrder(node.left);
			postOrder(node.right);
			System.out.println(node.data + " ");
		}

	}

}
