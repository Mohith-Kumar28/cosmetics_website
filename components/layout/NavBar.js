import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const router =useRouter()

  const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'link 1', href: '#', current:false },
    { name: 'Link 2', href: '#', current: false  },
    // { name: 'Home', href: '/', current: router.pathname=="/"  },
    // { name: 'Shifts', href: '/shifts', current:router.pathname.includes("/shifts")   },
    // { name: 'File Upload', href: '#fileUploadId', current: router.pathname.includes("/fileUpload")  },
    // { name: 'Resignation', href: '/resignation', current: router.pathname.includes("/resignation")  },
  ]
  return (
    <Disclosure as="nav" className="bg-white/30 backdrop-blur-xl fixed top-0 left-0 z-40 w-full shadow-lg ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className=" flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Link href="/">  <div className="bg-black ">
              
              {/* <Image
                    className=" h-12 w-auto "
                    src="/assets/logo.svg"
                    width={100}
                    height={100}
                    alt="ok"
                  /> */}
               
                </div></Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-600',
                          'rounded-md px-3 py-2 text-sm font-bold'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
            
      </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
