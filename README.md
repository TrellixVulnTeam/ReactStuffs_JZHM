# ReactStuffs
STATE:
 -babel/plugin-proposal-class-properties (already inside preset-env)
    class declaration without the constructor and arrow function to use a fixed this statement
 -webpack w/ loader and rules
  (devtool: "eval-cheap-module-source-map") should show the element path before being parsed by the loader --> (use: {
                                                                                                                    loader: "babel-loader",
                                                                                                                    options: {
                                                                                                                      presets: ["@babel/preset-env", "@babel/preset-react"],
                                                                                                                    },
                                                                                                                  },
    -import and export (third party and own components)
      -export default  ( 'export default GIVEN_NAME' and 'export default const varname = ()....')
