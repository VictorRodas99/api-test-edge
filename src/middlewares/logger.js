import { getDate } from '../utils/generalTools.js'

/**
 * @typedef { import('express').Request } Request
 * @typedef { import('express').Response } Response
 * @typedef { import('express').NextFunction } NextFunction
 *
 * @param { Request } req
 * @param { Response } res
 * @param { NextFunction } next
 */
export function logger (req, res, next) {
  const fullDate = getDate()
  const { method, url, protocol, httpVersion, ip } = req

  res.on('finish', () => {
    const code = res.statusCode
    console.log(
      `${ip} - - [${fullDate}] "${method} ${url} ${protocol.toUpperCase()}/${httpVersion}" ${code} -`
    )
  })

  next()
}
