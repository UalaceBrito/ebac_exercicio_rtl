import { fireEvent, render, screen, within } from '@testing-library/react';
import PostComments from '.';

describe('PostComments', () => {
    it('adiciona dois comentários à lista', () => {
        render(<PostComments />);

        const input = screen.getByRole('textbox');
        const submitButton = screen.getByRole('button', { name: 'Comentar' });

        fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submitButton);

        fireEvent.change(input, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);

        const comments = within(screen.getByTestId('comments-list')).getAllByRole('listitem');
        expect(comments).toHaveLength(2);
        expect(comments[0]).toHaveTextContent('Primeiro comentário');
        expect(comments[1]).toHaveTextContent('Segundo comentário');
        expect(input).toHaveValue('');
    });
});