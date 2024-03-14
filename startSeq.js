( 
    async () => {

        const conn = require ('./dbSeq');
        const filme = require ('./filmes');
        await conn.sync();
})();