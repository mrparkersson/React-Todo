import InputTodo from '../src/classBased/components/InputTodo';

test('Add a todo', () => {
  render(<InputTodo />);
  fireEvent.click(screen.getElementById('input-submit'));
});
