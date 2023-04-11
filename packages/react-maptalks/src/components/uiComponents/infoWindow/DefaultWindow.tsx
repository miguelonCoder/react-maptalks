import React, { JSXElementConstructor, ReactElement } from "react"


/**
 * Wrap InfoWindow content into a default style template 
 */
export const DefaultWindow = ({ children }: { children: ReactElement<any, string | JSXElementConstructor<any>> }) => {
  return (
    <div className="infowindow-container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div className="infowindow-content"
      style={{
        background: '#ffffff',
        padding: '16px',
        borderRadius: '10px',
        minWidth: '200px',
        boxShadow: '0 3px 14px rgba(0,0,0,0.4)',
      }}>
        {children}
      </div>
      <div className="infowindow-tip-container"
      style={{
        overflowX: 'hidden',
        width: '200px',
        height: '24px',
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <div className="infowindow-tooltip"
        style={{
          width: '20px',
          height: '20px',
          transform: 'translateY(-10px) rotate(45deg)',
          background: '#ffffff',
          boxShadow: '0 3px 14px rgba(0,0,0,0.4)',
        }}></div>
      </div>
    </div>
  )
}