'use client'

import React, { useState } from 'react'
import { Button, GroupButtons, Item, Logo, Menu, Nav } from './Styles'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
const Header = () => {
  const items = [
    { url: '/', name: 'Inicio' },
    { url: '/', name: 'Sobre' },
    { url: '', name: 'Serviços' },
    { url: '/', name: 'Contato' },
  ]

  const [open, setOpen] = useState()
  const anim = {
    exit: {
      opacity: 0,
      heigth: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        delay: 0.9,

      }
    }
  }

  return (
    <Nav>
      <Logo>
        <h1>Medico</h1>
      </Logo>
      <Menu>
        <div className="desktop">
          {items.map((index) => (
            <Item key={index.name}>
              <Link href={index.url}>
                {index.name}
              </Link>
            </Item>
          ))}
        </div>

        <div className='mobile'>
          <Image src={'/menu.png'} alt='' width={20} height={20} onClick={() => setOpen(!open)} />
          <AnimatePresence>
            {open && (
              <motion.div className="popup"
                variants={anim}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: '100vh', opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit='exit'
              >
                <Image src={'/x.png'} alt='' width={20} height={20} onClick={() => setOpen(!open)} />

                <Item
                  variants={anim}
                  initial={{ y: 90, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: 'easeInOut',
                      delay: 0.8,
                    }
                  }}
                >
                  <Link href={'/'}>
                    Inicio
                  </Link>
                </Item>
                <Item
                  variants={anim}
                  initial={{ y: 90, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: 'easeInOut',
                      delay: 0.6,
                    }
                  }}
                >
                  <Link href={'/'}>
                    Sobre
                  </Link>
                </Item>
                <Item
                  variants={anim}
                  initial={{ y: 90, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: 'easeInOut',
                      delay: 0.4,
                    }
                  }}
                >
                  <Link href={'/'}>
                    Serviços
                  </Link>
                </Item>
                <Item
                  variants={anim}
                  initial={{ y: 90, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: 'easeInOut',
                      delay: 0.2,
                    }
                  }}
                >
                  <Link href={'/'}>
                    Contato
                  </Link>
                </Item>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        <GroupButtons >
          <button className='login'>
            Entrar
          </button>
          <button className='signup'>
            Cadastrar
            <Image src={'/arrow.png'} alt='' width={20} height={20} />
          </button>
        </GroupButtons>
      </Menu>
    </Nav>
  )
}

export default Header