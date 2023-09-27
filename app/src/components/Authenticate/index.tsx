// Função de simulação de autenticação
async function simulateAuthentication(email, password) {
    // Aqui você pode definir regras de autenticação temporárias para fins de teste.
    // Por exemplo, você pode verificar se o email e a senha correspondem a um valor específico.
    // Lembre-se de que esta é apenas uma simulação temporária e não deve ser usada em um ambiente de produção.

    const alunos = [
        { email: 'aluno', password: '123' },
    ];

    const professores = [
        { email: 'professor', password: '123' },
    ];

    const isAluno = alunos.some((credencial) => {
        return credencial.email === email && credencial.password === password;
    });

    const isProfessor = professores.some((credencial) => {
        return credencial.email === email && credencial.password === password;
    });

    if (isAluno) {
        return 'aluno'; // Credenciais de aluno
    } else if (isProfessor) {
        return 'professor'; // Credenciais de professor
    } else {
        return 'invalid'; // Credenciais inválidas
    }
}
