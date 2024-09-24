new Vue({
    el: '#app',
    data: {
        activeTab: 'calificaciones',
        nota1: '',
        nota2: '',
        nota3: '',
        asistencia: '',
        resultado: '',
        nombre: '',
        correo: '',
        contrasena: '',
        repetirContrasena: '',
        mensajeRegistro: ''
    },
    methods: {
        calcular() {
            const n1 = parseFloat(this.nota1);
            const n2 = parseFloat(this.nota2);
            const n3 = parseFloat(this.nota3);
            const asistencia = parseFloat(this.asistencia);

            if (n1 < 10 || n1 > 70 || n2 < 10 || n2 > 70 || n3 < 10 || n3 > 70 || asistencia < 0 || asistencia > 100) {
                this.resultado = 'Por favor, ingrese valores válidos.';
                return;
            }

            const promedio = (n1 * 0.35) + (n2 * 0.35) + (n3 * 0.30);
            if (promedio >= 40 && asistencia >= 80) {
                this.resultado = `Aprobado! Promedio: ${promedio.toFixed(2)}`;
            } else {
                this.resultado = 'Reprobado';
            }
        },
        registrar() {
            if (!this.nombre || !this.correo || !this.contrasena || !this.repetirContrasena) {
                alert('Por favor, complete todos los campos.');
                return;
            }
            if (this.contrasena !== this.repetirContrasena) {
                alert('Las contraseñas no coinciden.');
                return;
            }
            alert('El registro se ha realizado correctamente');
            this.mensajeRegistro = 'Registro exitoso!';
        }
    }
});

