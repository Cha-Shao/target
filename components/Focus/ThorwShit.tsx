"use client"

import {
  useEffect,
  useState,
} from "react"
import { ShitIcon } from "./ShitIcon"
import {
  AnimatePresence,
  motion,
} from "framer-motion"
import { focusStore } from "@/stores/focus"
import { useStore } from "@nanostores/react"

const title = [
  "你在练一心两用吗？",
  "太不专注了！",
  "我想不出骚话了",
  "有什么事情比番茄钟更紧要？",
  "有点破事，暂停一下",
  "别不小心把事情干完了",
  "刷会抖音",
  "专注力欠费，请充值",
  "外面有人吵架，看一看",
  "星期八再继续",
]

const ThrowShit = () => {
  const [show, setShow] = useState(false)
  const [randomTitle, setRandomTitle] = useState(0)
  const pauseTime = useStore(focusStore).pauseTime

  useEffect(() => {
    if (pauseTime > 2) {
      setRandomTitle(Math.round(Math.random() * (title.length - 1)))
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 1000)
    }
  }, [pauseTime])

  return (
    <AnimatePresence>
      {show && (<>
        <motion.div
          initial={{ opacity: 1, x: "-50%", y: "-50%", scale: 0 }}
          animate={{ opacity: 1, x: "-50%", y: "-50%", scale: 1, rotate: "-15deg" }}
          exit={{ opacity: 0, x: "-50%", y: "100%", transition: { duration: 2 } }}
          className="fixed left-1/2 top-1/2 z-50 pointer-events-none"
        >
          <ShitIcon />
        </motion.div>
        <motion.h1
          layoutId={"shit-title"}
          initial={{ opacity: 1, x: "-50%", y: "-50%", scale: 0 }}
          animate={{ opacity: 1, x: "-50%", y: "-50%", scale: 1, rotate: "15deg" }}
          exit={{ opacity: 0, x: "-50%", y: "-50%", transition: { duration: 2 } }}
          transition={{ duration: 0.2 }}
          className="fixed left-1/2 top-1/2 z-50 text-primary text-9xl font-bold drop-shadow-xl pointer-events-none"
        >
          {title[randomTitle]}
        </motion.h1>
      </>)}
    </AnimatePresence>
  )
}

export default ThrowShit
