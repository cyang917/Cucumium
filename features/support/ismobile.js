'use strict'
const ismobile = !!process.env.EMU_DEVICE || !!process.env.DEVICE_NAME
const isdevice = !!process.env.DEVICE_NAME

module.exports = {
  ismobile: ismobile,
  isdevice: isdevice
}