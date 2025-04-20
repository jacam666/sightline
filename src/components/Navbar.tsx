'use client';

import React, { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contactUs' },
    { name: 'Gallery', href: '/gallery' },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // If not mounted, return null to avoid mismatches
    if (!mounted) {
        return null;
    }

    return (
        <Disclosure as="nav" className="">
            <div className="mx-auto px-2 sm:px-6 lg:px-8 bg-green-950 py-6">
                <div className="relative flex h-28 items-center justify-between  pt-8">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white font-bold transition-colors focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-10 w-10 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-8 w-8 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
                        <div className="flex shrink-0 items-center absolute left-1/2 -translate-x-1/2 sm:relative sm:left-auto sm:translate-x-0 my-4">
                            <Link href="/">
                                <img
                                    alt="Your Company"
                                    src="/images/Sightline Windows Ltd_PNG.avif"
                                    className=" h-28  w-40 md:h-28 md:w-36 "
                                />
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex items-center">
                            {/* <div className="flex space-x-8"> */}
                            <div className="flex space-x-4 md:space-x-6 lg:space-x-8">

                                {navigation.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={isActive ? 'page' : undefined}
                                            className={classNames(
                                                isActive
                                                    ? 'bg-green-950 text-white'
                                                    : 'text-white hover:bg-green-900 hover:text-white',
                                                'rounded-md px-4 py-1 text-lg transition-colors duration-300 ease-in-out'
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DisclosurePanel className="sm:hidden bg-green-950">
                <div className="space-y-1 px-2 pt-2 pb-3 ">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={isActive ? 'page' : undefined}
                                className={classNames(
                                    isActive
                                        ? 'bg-green-900 text-white'
                                        : 'text-white hover:bg-green-900 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base  transition-colors duration-300 ease-in-out'
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        );
                    })}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
