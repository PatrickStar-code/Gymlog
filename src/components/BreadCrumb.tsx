import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { RouteType } from "@/app/Types";

export default function BreadCrumbComponent(Route: RouteType) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {Route.subRoutes?.map((subRoute, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="hover:text-foreground"
                href={`/${subRoute}`}
              >
                {subRoute}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </React.Fragment>
        ))}

        <BreadcrumbItem>
          <BreadcrumbPage className="font-semibold">
            {Route.principal}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
