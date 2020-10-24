import '@virtualpatterns/mablung-source-map-support/install'
import _Bundler from 'esbuild'

const { 'build': Bundle } = _Bundler

async function main() {

  try {

    await Bundle({
      'entryPoints': [ 'pre-bundle-utility.js' ],
      'outfile': 'post-bundle-utility.js',
      'minify': false,
      'bundle': true
    })
    
  } catch (error) {
    console.error(error)
  }

}

main()