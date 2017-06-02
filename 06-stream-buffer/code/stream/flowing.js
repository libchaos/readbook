process.stdin
  .on('readable', () => {
    let chunk
    console.log('new data avaliable')
    while ((chunk = process.stdin.read()) !== null) {
      console.log(`Chunk read: ${chunk.length} ${chunk.toString()}`)
    }
  })
  .on('end', () => process.stdout.write('End of stream'))



process.stdin
  .on('data', chunk => {
    console.log('new data available')
    console.log(`${chunk.length} ${chunk.toString()}`)
  })
  .on('end', () => process.stdout.write('end of stream'))

