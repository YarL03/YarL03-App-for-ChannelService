export const rules = {
    required: (message = 'This is required') => ({
        required: true,
        message
    }),
    loginAndPassRegExp: /([^\s]+)(\n(?= +[^\s]+))?/g,
}