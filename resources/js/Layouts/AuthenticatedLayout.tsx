import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { Head, Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useState } from "react";
import { AppSidebar } from "@/Layouts/Sidebar/AppSidebar";
import { ModeToggle } from "@/components/mode-toggle";

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <Head>{header}</Head>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 justify-between items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-[orientation=vertical]:h-4"
                            />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="#">
                                            {header}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    {/* <BreadcrumbSeparator className="hidden md:block" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>
                                            Data Fetching
                                        </BreadcrumbPage>
                                    </BreadcrumbItem> */}
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                        <div className="mx-2">
                            <ModeToggle />
                        </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        {/*  page content */}
                        {children}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    );
}
