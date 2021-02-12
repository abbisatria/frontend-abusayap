import React, { Fragment, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js'

const MyChart = (props) => {
  useEffect(() => {
    Chart.elements.Rectangle.prototype.draw = function () {
      const ctx = this._chart.ctx
      const vm = this._view
      let left, right, top, bottom, signX, signY, borderSkipped, radius
      let borderWidth = vm.borderWidth
      // Set Radius Here
      // If radius is large enough to cause drawing errors a max radius is imposed
      const cornerRadius = 20

      if (!vm.horizontal) {
        // bar
        left = vm.x - vm.width / 2
        right = vm.x + vm.width / 2
        top = vm.y
        bottom = vm.base
        signX = 1
        signY = bottom > top ? 1 : -1
        borderSkipped = vm.borderSkipped || 'bottom'
      } else {
        // horizontal bar
        left = vm.base
        right = vm.x
        top = vm.y - vm.height / 2
        bottom = vm.y + vm.height / 2
        signX = right > left ? 1 : -1
        signY = 1
        borderSkipped = vm.borderSkipped || 'left'
      }

      // Canvas doesn't allow us to stroke inside the width so we can
      // adjust the sizes to fit if we're setting a stroke on the line
      if (borderWidth) {
        // borderWidth shold be less than bar width and bar height.
        const barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom))
        borderWidth = borderWidth > barSize ? barSize : borderWidth
        const halfStroke = borderWidth / 2
        // Adjust borderWidth when bar top position is near vm.base(zero).
        const borderLeft =
          left + (borderSkipped !== 'left' ? halfStroke * signX : 0)
        const borderRight =
          right + (borderSkipped !== 'right' ? -halfStroke * signX : 0)
        const borderTop =
          top + (borderSkipped !== 'top' ? halfStroke * signY : 0)
        const borderBottom =
          bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0)
        // not become a vertical line?
        if (borderLeft !== borderRight) {
          top = borderTop
          bottom = borderBottom
        }
        // not become a horizontal line?
        if (borderTop !== borderBottom) {
          left = borderLeft
          right = borderRight
        }
      }

      ctx.beginPath()
      ctx.fillStyle = vm.backgroundColor
      ctx.strokeStyle = vm.borderColor
      ctx.lineWidth = borderWidth

      // Corner points, from bottom-left to bottom-right clockwise
      // | 1 2 |
      // | 0 3 |
      const corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom]
      ]

      // Find first (starting) corner with fallback to 'bottom'
      const borders = ['bottom', 'left', 'top', 'right']
      let startCorner = borders.indexOf(borderSkipped, 0)
      if (startCorner === -1) {
        startCorner = 0
      }

      function cornerAt (index) {
        return corners[(startCorner + index) % 4]
      }

      // Draw rectangle from 'startCorner'
      let corner = cornerAt(0)
      ctx.moveTo(corner[0], corner[1])

      for (let i = 1; i < 4; i++) {
        corner = cornerAt(i)

        const width = corners[2][0] - corners[1][0]
        const height = corners[0][1] - corners[1][1]
        const x = corners[1][0]
        const y = corners[1][1]

        radius = cornerRadius

        // Fix radius being too large
        if (radius > height / 2) {
          radius = height / 2
        }
        if (radius > width / 2) {
          radius = width / 2
        }

        ctx.moveTo(x + radius, y)
        ctx.lineTo(x + width - radius, y)
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
        ctx.lineTo(x + width, y + height - radius)
        ctx.quadraticCurveTo(
          x + width,
          y + height,
          x + width - radius,
          y + height
        )
        ctx.lineTo(x + radius, y + height)
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
        ctx.lineTo(x, y + radius)
        ctx.quadraticCurveTo(x, y, x + radius, y)
      }

      ctx.fill()
      if (borderWidth) {
        ctx.stroke()
      }
    }
  })
  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: '',
        backgroundColor: [
          '#00D16C',
          '#00D16C',
          '#9DA6B5',
          '#9DA6B5',
          '#9DA6B5',
          '#00D16C',
          '#9DA6B5'
        ],
        barThickness: 15,
        data: [120, 70, 100, 80, 56, 107, 110]
      }
    ]
  }

  const options = {
    legend: {
      display: false
    },
    responsive: true,
    scales: {
      xAxes: [
        {
          maxBarThickness: 20,
          gridLines: {
            lineWidth: 0,
            display: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            display: false,
            min: 0
          },
          gridLines: {
            lineWidth: 0,
            display: false
          }
        }
      ]
    }
  }
  return (
    <Fragment>
      <Bar data={data} options={options} height="268px" />
    </Fragment>
  )
}

export default MyChart