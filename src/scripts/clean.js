const fs = require('fs').promises;

async function clean() {
    try {
        fs.rm('dist', { recursive: true })
        console.log('Successfully cleaned the "dist" directory.');
    } catch (error) {
        console.error('Error cleaning the "dist" directory:', error.message);
        process.exit(1);
    }
}

clean();