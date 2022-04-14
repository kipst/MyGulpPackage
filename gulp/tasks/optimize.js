import del from 'del';

export const optimize = () => {
    return del(app.path.clean);
}
