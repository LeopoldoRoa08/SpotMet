import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ReservaAuditorio.css";

const ReservaAuditorio = ({ color = "#EE5D08", className }) => {
  return (
    <svg
      className={`menu-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
        fill={color}
      />
    </svg>
  );
};

// SharedDotPattern Component
const SharedDotPattern = ({ className }) => {
  return (
    <svg
      className={`shared-dot-pattern ${className}`}
      fill="none"
      height="262"
      viewBox="0 0 366 262"
      width="366"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_601_360)">
        <path
          className="path"
          d="M0.148438 262L0.148438 258H4.14844V262H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 242L0.148438 238H4.14844L4.14844 242H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 222L0.148438 218H4.14844V222H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 202L0.148438 198H4.14844V202H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 182L0.148438 178H4.14844V182H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 162L0.148438 158H4.14844V162H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 142L0.148438 138H4.14844L4.14844 142H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 122L0.148438 118H4.14844V122H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 102L0.148438 98H4.14844V102H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 82L0.148438 78H4.14844L4.14844 82H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 62L0.148438 58H4.14844V62H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 42L0.148438 38H4.14844V42H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 22L0.148438 18H4.14844V22H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 2L0.148438 -2H4.14844V2H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 -18L0.148438 -22H4.14844L4.14844 -18H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 -38L0.148438 -42H4.14844V-38H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 -58L0.148438 -62H4.14844V-58H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 -78L0.148438 -82H4.14844L4.14844 -78H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 -98L0.148438 -102H4.14844V-98H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 -118L0.148438 -122H4.14844V-118H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M0.148438 -138L0.148438 -142H4.14844V-138H0.148438Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 262V258H24.1484V262H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 242V238H24.1484V242H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 222V218H24.1484V222H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 202V198H24.1484V202H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 182V178H24.1484V182H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 162V158H24.1484V162H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 142V138H24.1484V142H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 122V118H24.1484V122H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 102V98H24.1484V102H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 82V78H24.1484V82H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 62L20.1484 58H24.1484L24.1484 62H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 42V38H24.1484V42H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 22V18H24.1484V22H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 2L20.1484 -2H24.1484L24.1484 2H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 -18V-22H24.1484V-18H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 -38V-42H24.1484V-38H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 -58V-62H24.1484V-58H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 -78V-82H24.1484V-78H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 -98V-102H24.1484V-98H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 -118V-122H24.1484V-118H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M20.1484 -138V-142H24.1484V-138H20.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 262V258H44.1484V262H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 242V238H44.1484V242H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 222V218H44.1484V222H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 202V198H44.1484V202H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 182V178H44.1484V182H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 162V158H44.1484V162H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 142V138H44.1484V142H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 122V118H44.1484V122H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 102V98H44.1484V102H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 82V78H44.1484V82H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 62V58H44.1484V62H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 42V38H44.1484V42H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 22V18H44.1484V22H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 2V-2H44.1484V2H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 -18V-22H44.1484V-18H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 -38V-42H44.1484V-38H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 -58V-62H44.1484V-58H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 -78V-82H44.1484V-78H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 -98V-102H44.1484V-98H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 -118V-122H44.1484V-118H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M40.1484 -138V-142H44.1484V-138H40.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 262V258H64.1484V262H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 242V238H64.1484V242H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 222V218H64.1484V222H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 202V198H64.1484V202H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 182V178H64.1484V182H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 162V158H64.1484V162H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 142V138H64.1484V142H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 122V118H64.1484V122H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 102V98H64.1484V102H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 82V78H64.1484V82H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 62V58H64.1484V62H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 42V38H64.1484V42H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 22V18H64.1484V22H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 2V-2H64.1484V2H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 -18V-22H64.1484V-18H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 -38V-42H64.1484V-38H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 -58V-62H64.1484V-58H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 -78V-82H64.1484V-78H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 -98V-102H64.1484V-98H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 -118V-122H64.1484V-118H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M60.1484 -138V-142H64.1484V-138H60.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 262V258H84.1484V262H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 242V238H84.1484V242H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 222V218H84.1484V222H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 202V198H84.1484V202H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 182V178H84.1484V182H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 162V158H84.1484V162H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 142V138H84.1484V142H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 122V118H84.1484V122H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 102V98H84.1484V102H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 82V78H84.1484V82H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 62V58H84.1484V62H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 42V38H84.1484V42H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 22V18H84.1484V22H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 2V-2H84.1484V2H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 -18V-22H84.1484V-18H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 -38V-42H84.1484V-38H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 -58V-62H84.1484V-58H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 -78V-82H84.1484V-78H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 -98V-102H84.1484V-98H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 -118V-122H84.1484V-118H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M80.1484 -138V-142H84.1484V-138H80.1484Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 262V258H104.148V262H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 242V238H104.148V242H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 222V218H104.148V222H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 202V198H104.148V202H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 182V178H104.148V182H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 162V158H104.148V162H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 142V138H104.148V142H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 122V118H104.148V122H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 102V98H104.148V102H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 82V78H104.148V82H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 62V58H104.148V62H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 42V38H104.148V42H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 22V18H104.148V22H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 2V-2H104.148V2H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 -18V-22H104.148V-18H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 -38V-42H104.148V-38H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 -58V-62H104.148V-58H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 -78V-82H104.148V-78H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 -98V-102H104.148V-98H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 -118V-122H104.148V-118H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M100.148 -138V-142H104.148V-138H100.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 262V258H124.148V262H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 242V238H124.148V242H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 222V218H124.148V222H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 202V198H124.148V202H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 182V178H124.148V182H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 162V158H124.148V162H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 142V138H124.148V142H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 122V118H124.148V122H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 102V98H124.148V102H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 82V78H124.148V82H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 62V58H124.148V62H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 42V38H124.148V42H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 22V18H124.148V22H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 2V-2H124.148V2H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 -18V-22H124.148V-18H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 -38V-42H124.148V-38H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 -58V-62H124.148V-58H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 -78V-82H124.148V-78H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 -98V-102H124.148V-98H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 -118V-122H124.148V-118H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M120.148 -138V-142H124.148V-138H120.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 262V258H144.148V262H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 242V238H144.148V242H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 222V218H144.148V222H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 202V198H144.148V202H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 182V178H144.148V182H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 162V158H144.148V162H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 142V138H144.148V142H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 122V118H144.148V122H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 102V98H144.148V102H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 82V78H144.148V82H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 62V58H144.148V62H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 42V38H144.148V42H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 22V18H144.148V22H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 2V-2H144.148V2H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 -18V-22H144.148V-18H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 -38V-42H144.148V-38H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 -58V-62H144.148V-58H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 -78V-82H144.148V-78H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 -98V-102H144.148V-98H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 -118V-122H144.148V-118H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M140.148 -138V-142H144.148V-138H140.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 262V258H164.148V262H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 242V238H164.148V242H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 222V218H164.148V222H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 202V198H164.148V202H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 182V178H164.148V182H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 162V158H164.148V162H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 142V138H164.148V142H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 122V118H164.148V122H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 102V98H164.148V102H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 82V78H164.148V82H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 62V58H164.148V62H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 42V38H164.148V42H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 22V18H164.148V22H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 2V-2H164.148V2H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 -18V-22H164.148V-18H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 -38V-42H164.148V-38H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 -58V-62H164.148V-58H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 -78V-82H164.148V-78H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 -98V-102H164.148V-98H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 -118V-122H164.148V-118H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M160.148 -138V-142H164.148V-138H160.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 262V258H184.148V262H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 242V238H184.148V242H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 222V218H184.148V222H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 202V198H184.148V202H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 182V178H184.148V182H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 162V158H184.148V162H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 142V138H184.148V142H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 122V118H184.148V122H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 102V98H184.148V102H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 82V78H184.148V82H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 62V58H184.148V62H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 42V38H184.148V42H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 22V18H184.148V22H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 2V-2H184.148V2H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 -18V-22H184.148V-18H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 -38V-42H184.148V-38H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 -58V-62H184.148V-58H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 -78V-82H184.148V-78H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 -98V-102H184.148V-98H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 -118V-122H184.148V-118H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M180.148 -138V-142H184.148V-138H180.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 262V258H204.148V262H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 242V238H204.148V242H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 222V218H204.148V222H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 202V198H204.148V202H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 182V178H204.148V182H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 162V158H204.148V162H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 142V138H204.148V142H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 122V118H204.148V122H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 102V98H204.148V102H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 82V78H204.148V82H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 62V58H204.148V62H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 42V38H204.148V42H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 22V18H204.148V22H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 2V-2H204.148V2H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 -18V-22H204.148V-18H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 -38V-42H204.148V-38H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 -58V-62H204.148V-58H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 -78V-82H204.148V-78H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 -98V-102H204.148V-98H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 -118V-122H204.148V-118H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M200.148 -138V-142H204.148V-138H200.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 262V258H224.148V262H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 242V238H224.148V242H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 222V218H224.148V222H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 202V198H224.148V202H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 182V178H224.148V182H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 162V158H224.148V162H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 142V138H224.148V142H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 122V118H224.148V122H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 102V98H224.148V102H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 82V78H224.148V82H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 62V58H224.148V62H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 42V38H224.148V42H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 22V18H224.148V22H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 2V-2H224.148V2H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 -18V-22H224.148V-18H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 -38V-42H224.148V-38H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 -58V-62H224.148V-58H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 -78V-82H224.148V-78H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 -98V-102H224.148V-98H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 -118V-122H224.148V-118H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M220.148 -138V-142H224.148V-138H220.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 262V258H244.148V262H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 242V238H244.148V242H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 222V218H244.148V222H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 202V198H244.148V202H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 182V178H244.148V182H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 162V158H244.148V162H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 142V138H244.148V142H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 122V118H244.148V122H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 102V98H244.148V102H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 82V78H244.148V82H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 62V58H244.148V62H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 42V38H244.148V42H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 22V18H244.148V22H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 2V-2H244.148V2H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 -18V-22H244.148V-18H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 -38V-42H244.148V-38H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 -58V-62H244.148V-58H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 -78V-82H244.148V-78H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 -98V-102H244.148V-98H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 -118V-122H244.148V-118H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M240.148 -138V-142H244.148V-138H240.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 262V258H264.148V262H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 242V238L264.148 238V242L260.148 242Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 222V218H264.148V222H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 202V198H264.148V202H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 182V178H264.148V182H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 162V158H264.148V162H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 142V138H264.148V142H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 122V118H264.148V122H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 102V98H264.148V102H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 82V78H264.148V82H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 62V58H264.148V62H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 42V38H264.148V42H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 22V18H264.148V22H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 2V-2H264.148V2H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 -18V-22H264.148V-18H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 -38V-42H264.148V-38H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 -58V-62H264.148V-58H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 -78V-82H264.148V-78H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 -98V-102H264.148V-98H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 -118V-122H264.148V-118H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M260.148 -138V-142H264.148V-138H260.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 262V258H284.148V262H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 242V238H284.148V242H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 222V218H284.148V222H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 202V198H284.148V202H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 182V178H284.148V182H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 162V158H284.148V162H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 142V138H284.148V142H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 122V118H284.148V122H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 102V98H284.148V102H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 82V78H284.148V82H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 62V58H284.148V62H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 42V38H284.148V42H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 22V18H284.148V22H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 2V-2H284.148V2H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 -18V-22H284.148V-18H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 -38V-42H284.148V-38H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 -58V-62H284.148V-58H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 -78V-82H284.148V-78H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 -98V-102H284.148V-98H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 -118V-122H284.148V-118H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M280.148 -138V-142H284.148V-138H280.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 262V258H304.148V262H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 242V238H304.148V242H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 222V218H304.148V222H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 202V198H304.148V202H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 182V178H304.148V182H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 162V158H304.148V162H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 142V138H304.148V142H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 122V118H304.148V122H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 102V98H304.148V102H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 82V78H304.148V82H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 62V58H304.148V62H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 42V38H304.148V42H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 22V18H304.148V22H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 2V-2H304.148V2H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 -18V-22H304.148V-18H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 -38V-42H304.148V-38H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 -58V-62H304.148V-58H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 -78V-82H304.148V-78H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 -98V-102H304.148V-98H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 -118V-122H304.148V-118H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M300.148 -138V-142H304.148V-138H300.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 262V258H324.148V262H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 242V238H324.148V242H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 222V218H324.148V222H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 202V198H324.148V202H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 182V178H324.148V182H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 162V158H324.148V162H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 142V138H324.148V142H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 122V118H324.148V122H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 102V98H324.148V102H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 82V78H324.148V82H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 62V58H324.148V62H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 42V38H324.148V42H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 22V18H324.148V22H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 2V-2H324.148V2H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 -18V-22H324.148V-18H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 -38V-42H324.148V-38H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 -58V-62H324.148V-58H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 -78V-82H324.148V-78H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 -98V-102H324.148V-98H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 -118V-122H324.148V-118H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M320.148 -138V-142H324.148V-138H320.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 262V258H344.148V262H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 242V238H344.148V242H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 222V218H344.148V222H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 202V198H344.148V202H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 182V178H344.148V182H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 162V158H344.148V162H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 142V138H344.148V142H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 122V118H344.148V122H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 102V98H344.148V102H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 82V78H344.148V82H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 62V58H344.148V62H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 42V38H344.148V42H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 22V18H344.148V22H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 2V-2H344.148V2H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 -18V-22H344.148V-18H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 -38V-42H344.148V-38H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 -58V-62H344.148V-58H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 -78V-82H344.148V-78H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 -98V-102H344.148V-98H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 -118V-122H344.148V-118H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M340.148 -138V-142H344.148V-138H340.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 262V258H364.148V262H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 242V238H364.148V242H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 222V218H364.148V222H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 202V198H364.148V202H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 182V178H364.148V182H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 162V158H364.148V162H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 142V138H364.148V142H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 122V118H364.148V122H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 102V98H364.148V102H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 82V78H364.148V82H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 62V58H364.148V62H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 42V38H364.148V42H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 22V18H364.148V22H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 2V-2H364.148V2H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 -18V-22H364.148V-18H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 -38V-42H364.148V-38H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 -58V-62H364.148V-58H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 -78V-82H364.148V-78H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 -98V-102H364.148V-98H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 -118V-122H364.148V-118H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M360.148 -138V-142H364.148V-138H360.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 262V258H384.148V262H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 242V238H384.148V242H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 222V218H384.148V222H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 202V198H384.148V202H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 182V178H384.148V182H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 162V158H384.148V162H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 142V138H384.148V142H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 122V118H384.148V122H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 102V98H384.148V102H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 82V78H384.148V82H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 62V58H384.148V62H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 42V38H384.148V42H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 22V18H384.148V22H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 2V-2H384.148V2H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 -18V-22H384.148V-18H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 -38V-42H384.148V-38H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 -58V-62H384.148V-58H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 -78V-82H384.148V-78H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 -98V-102H384.148V-98H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 -118V-122H384.148V-118H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M380.148 -138V-142H384.148V-138H380.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 262V258H404.148V262H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 242V238H404.148V242H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 222V218H404.148V222H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 202V198H404.148V202H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 182V178H404.148V182H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 162V158H404.148V162H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 142V138H404.148V142H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 122V118H404.148V122H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 102V98H404.148V102H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 82V78H404.148V82H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 62V58H404.148V62H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 42V38H404.148V42H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 22V18H404.148V22H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 2V-2H404.148V2H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 -18V-22H404.148V-18H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 -38V-42H404.148V-38H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 -58V-62H404.148V-58H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 -78V-82H404.148V-78H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 -98V-102H404.148V-98H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 -118V-122H404.148V-118H400.148Z"
          fill="#E5E7EB"
        />
        <path
          className="path"
          d="M400.148 -138V-142H404.148V-138H400.148Z"
          fill="#E5E7EB"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_601_360">
          <rect
            className="rect"
            fill="white"
            height="365.19"
            transform="matrix(0 -1 1 0 0.148438 262)"
            width="262"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

// Main Reserva Component
const Reserva = () => {
  return (
    <div className="reserva" data-model-id="320:35">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Reservas</div>

          <div className="overlap-group">
            <div className="group">
              <img
                className="frame"
                alt="Frame"
                src="https://c.animaapp.com/au2TV8DS/img/frame.svg"
              />

              <img
                className="image"
                alt="Image"
                src="https://c.animaapp.com/au2TV8DS/img/image-1@2x.png"
              />

              <ReservaAuditorio className="menu" color="#EE5D08" />
            </div>

            <div className="rectangle" />

            <img
              className="img"
              alt="Frame"
              src="https://c.animaapp.com/au2TV8DS/img/frame-1.svg"
            />

            <div className="rectangle-2" />

            <div className="text-wrapper-2">Ingrese nombre del evento</div>

            <div className="text-wrapper-3">Horario</div>

            <p className="p">12:00 pm - 02:00 pm</p>

            <div className="background">
              <div className="overlap-group-2">
                <div className="plate" />

                <SharedDotPattern className="shared-dot-pattern" />
              </div>
            </div>

            <div className="laboratorio">
              Laboratorio Experimental
              <br />
              del Metaverso
            </div>

            <div className="text-wrapper-4">Tipo de espacio: Laboratorio</div>

            <div className="text-wrapper-5">Centro Mundo X</div>

            <div className="rectangle-3" />

            <img
              className="image-2"
              alt="Image"
              src="https://c.animaapp.com/au2TV8DS/img/image-7@2x.png"
            />

            <img
              className="image-2"
              alt="Image"
              src="https://c.animaapp.com/au2TV8DS/img/image-7@2x.png"
            />

            <ReservaAuditorio className="menu-2" color="#EE5D08" />
            <div className="vector-wrapper">
              <img
                className="vector"
                alt="Vector"
                src="https://c.animaapp.com/au2TV8DS/img/vector.svg"
              />
            </div>
          </div>

          <div className="text-wrapper-6">Nombre del Evento</div>

          <div className="overlap-2">
            <img
              className="frame-2"
              alt="Frame"
              src="https://c.animaapp.com/au2TV8DS/img/frame-2.svg"
            />

            <div className="text-wrapper-7">01/01/2025</div>
          </div>

          <div className="text-wrapper-8">Fecha</div>

          <div className="overlap-3">
            <div className="overlap-4">
              <div className="overlap-5">
                <img
                  className="image-3"
                  alt="Image"
                  src="https://c.animaapp.com/au2TV8DS/img/image-15@2x.png"
                />

                <img
                  className="line"
                  alt="Line"
                  src="https://c.animaapp.com/au2TV8DS/img/line-1.svg"
                />

                <img
                  className="line-2"
                  alt="Line"
                  src="https://c.animaapp.com/au2TV8DS/img/line-2.svg"
                />
              </div>

              <div className="ellipse-wrapper">
                <div className="ellipse" />
              </div>
            </div>

            <div className="text-wrapper-9">Checkout</div>

            <div className="text-wrapper-10">Subtotal</div>

            <div className="text-wrapper-11">Impuestos</div>

            <div className="text-wrapper-12">Total</div>

            <div className="text-wrapper-13">$120.00</div>

            <div className="text-wrapper-14">$5.00</div>

            <div className="text-wrapper-15">$125.00</div>
          </div>

          <img
            className="laboratorio-realidad"
            alt="Laboratorio realidad"
            src="https://c.animaapp.com/au2TV8DS/img/laboratorio-realidad-virtual-2@2x.png"
          />
        </div>

        <div className="copyright-wrapper">
          <p className="copyright">
            <span className="span">
              Copyright © 2025 - Spotmet | Síguenos:{" "}
            </span>

            <span className="text-wrapper-16">Instagram</span>

            <span className="span"> | </span>

            <span className="text-wrapper-16">Facebook</span>
          </p>
        </div>

        <div className="overlap-6">
          <div className="rectangle-4" />

          <div className="text-wrapper-17">Pagar</div>
        </div>

        <div className="text-wrapper-18">Inicio</div>

        <img
          className="frame-3"
          alt="Frame"
          src="https://c.animaapp.com/au2TV8DS/img/frame-3.svg"
        />
      </div>
    </div>
  );
};

export default ReservaAuditorio;
