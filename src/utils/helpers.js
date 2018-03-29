import React from 'react'

// https://github.com/wesbos/dump/blob/master/Dump.js

export const Dump = props => (
  <div
    style={{
      fontSize: 20,
      border: '1px solid #efefef',
      padding: 10,
      background: 'white'
    }}>
    {Object.keys(props).map(prop => (
      <pre key={prop}>
        <strong style={{ color: 'white', background: 'red' }}>
          {prop} 💩
        </strong>
        {JSON.stringify(props[prop], '', ' ')}
      </pre>
    ))}
  </div>
)

// https://gist.github.com/spences10/27ee6e716ba31de495987bec356a2aae

export const slugIt = text => {
  if (!text) return
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

// https://github.com/mobz/lag-radar/blob/master/lag-radar.js

/**
 * lagRadar
 * Licence: ISC copyright: @mobz 2018
 */

/**
 * usage:
 * const destroy = lagRadar({
 *   frames: 50, // number of frames to draw, more = worse performance
 *   speed: 0.0017, // how fast the sweep moves (rads per ms)
 *   size: 300, // outer frame px
 *   inset: 3, // circle inset px
 *   parent: document.body // DOM node to attach to
 * })
 */

export const lagRadar = (config = {}) => {
  const {
    frames = 50, // number of frames to draw, more = worse performance
    speed = 0.0017, // how fast the sweep moves (rads per ms)
    size = 300, // outer frame px
    inset = 3, // circle inset px
    parent = document.body // DOM node to attach to
  } = config

  const svgns = 'http://www.w3.org/2000/svg'

  const styles = document.createTextNode(`
    .lagRadar-sweep > * {
      shape-rendering: crispEdges;
    }
    .lagRadar-face {
      fill: transparent;
    }
    .lagRadar-hand {
      stroke-width: 4px;
      stroke-linecap: round;
    }
  `)

  function $svg(tag, props = {}, children = []) {
    const el = document.createElementNS(svgns, tag)
    Object.keys(props).forEach(prop =>
      el.setAttribute(prop, props[prop])
    )
    children.forEach(child => el.appendChild(child))
    return el
  }

  const PI2 = Math.PI * 2
  const middle = size / 2
  const radius = middle - inset

  const $hand = $svg('path', { class: 'lagRadar-hand' })
  const $arcs = new Array(frames).fill('path').map(t => $svg(t))
  const $root = $svg(
    'svg',
    { class: 'lagRadar', height: size, width: size },
    [
      $svg('style', { type: 'text/css' }, [styles]),
      $svg('g', { class: 'lagRadar-sweep' }, $arcs),
      $hand,
      $svg('circle', {
        class: 'lagRadar-face',
        cx: middle,
        cy: middle,
        r: radius
      })
    ]
  )

  parent.appendChild($root)

  const arcs = []
  let frame
  let arcPtr = 0
  arcs[arcPtr] = {
    rotation: 0,
    now: Date.now(),
    tx: middle + radius,
    ty: middle
  }

  const calcHue = (() => {
    const max_hue = 120
    const max_ms = 1000
    const log_f = 10
    const mult = max_hue / Math.log(max_ms / log_f)
    return function(ms_delta) {
      return (
        max_hue -
        Math.max(
          0,
          Math.min(mult * Math.log(ms_delta / log_f), max_hue)
        )
      )
    }
  })()

  function animate() {
    const now = Date.now()
    const last = arcs[arcPtr % frames]
    const rdelta = Math.min(PI2 - speed, speed * (now - last.now))
    const rotation = (last.rotation + rdelta) % PI2
    const tx = middle + radius * Math.cos(rotation)
    const ty = middle + radius * Math.sin(rotation)
    const bigArc = rdelta < Math.PI ? '0' : '1'
    const path = `M${tx} ${ty}A${radius} ${radius} 0 ${bigArc} 0 ${
      last.tx
    } ${last.ty}L${middle} ${middle}`
    const hue = calcHue(rdelta / speed)

    $arcs[arcPtr % frames].setAttribute('d', path)
    $arcs[arcPtr % frames].setAttribute(
      'fill',
      `hsl(${hue}, 80%, 40%)`
    )
    $hand.setAttribute('d', `M${middle} ${middle}L${tx} ${ty}`)
    $hand.setAttribute('stroke', `hsl(${hue}, 80%, 60%)`)

    for (let i = 0; i < frames; i++) {
      $arcs[(frames + arcPtr - i) % frames].style.fillOpacity =
        1 - i / frames
    }

    arcPtr++
    arcs[arcPtr % frames] = { now, rotation, tx, ty }

    frame = window.requestAnimationFrame(animate)
  }

  animate()

  return function destroy() {
    if (frame) {
      window.cancelAnimationFrame(frame)
    }
    $root.remove()
  }
}
