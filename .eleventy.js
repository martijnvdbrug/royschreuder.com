module.exports = eleventyConfig => {
    // Copy our static assets to the output folder
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addNunjucksFilter('unLocalify', function(value) {
        return value.split(' ').join('').replace('/{{locale}}', '');
    });

    // Returning something from the configuration function is optional
    return {
        dir: {
            output: "_site"
        }
    };
};
