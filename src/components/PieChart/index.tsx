import React, { useEffect, useRef } from "react"
import * as d3 from "d3"
import { Tooltip } from "./style"

export interface PieChartData {
    name: string,
    amount: number,
    attribute?: string,
}

export interface IPieChartProps {
    data: PieChartData[]
    colorScaleValue: any,
    html: (d: any) => string,
    width: number,
    height: number,
    [key: string]: any
}

export default function PieChart(props: IPieChartProps) {
    const { data, colorScaleValue, html, width, height, ...rest } = props
    const d3Container = useRef(null)
    const tooltipRef = useRef(null)

    useEffect(() => {
        if(!d3Container || !tooltipRef) return

        const svgGroup = d3Container.current
        const tooltip = d3.select(tooltipRef.current)

        /**
         * D3 arcGenerator. See docs for usage
         */
        const arcGenerator = d3.arc<any>()
            .padAngle(.03)
            .innerRadius(height * .15)
            .outerRadius(height / 2)
            .cornerRadius(4)

        /**
         * Uses the pieGenerator from D3 to transform absolute data
         * to acceptable data for the D3 arcGenerator
         *
         * Accepts any form of relatable JSON as long as
         * .value is changed accordingly
         *
         * @type {any}
         */
        const arcData = d3.pie<PieChartData>()
            .value(d => d.amount)
            (data)

        /**
         * Fills the pie slices with a darker or lighter color
         * according to the amount used in the beer.
         */
        const colorScaleDomain = d3.extent<PieChartData, number>(data, d => d.amount);
        const colorScale = d3.scaleLinear()
            .domain(colorScaleDomain[0] === undefined || colorScaleDomain[1] === undefined ? [0,0] : colorScaleDomain)
            .range(colorScaleValue)

        /**
         * Create Pie Chart Slices
         */
        d3.select(svgGroup)
            .selectAll('path')
            .data(arcData, function(d: any) { return `${d.data.amount-d.data.name}` })
            .join('path')
            .classed('slice', true)
            .attr('fill', d => colorScale(d.data.amount))
            .attr('d', arcGenerator)
            .on('mouseover', function(event, d) {
                tooltip
                    .style('visibility', 'visible')
                    .html(html(d))
            })
            .on('mousemove', function(event) {
                tooltip
                    .style('top', event.pageY + "px")
                    .style('left', event.pageX + 16 + "px")
            })
            .on('mouseout', function() {
                tooltip
                    .style('visibility', 'hidden')
            })

    }, [data, colorScaleValue, html, height])


    return (<>
        <Tooltip className="tooltip" ref={tooltipRef}/>
        <svg {...rest} height={height} width={width}>
            <g ref={d3Container} transform={`translate(${height / 2}, ${width / 2})`}/>
        </svg>
    </>);
}
