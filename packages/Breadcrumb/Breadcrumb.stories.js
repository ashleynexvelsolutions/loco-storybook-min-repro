import React from 'react'
import { Breadcrumb } from './Breadcrumb'

export default {
  title: 'Component Story Format/Breadcrumb',
  component: Breadcrumb,
  /*
	This is just one example. More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
	  fontColor: { control: 'color' },
	}, */
}
const Template = args => {
  return <Breadcrumb {...args} />
}

function BreadcrumbFunction() {
  return {
    breadcrumbs:
      '\t\t\t<!-- Flexy Breadcrumb -->\r\n\t\t\t<div class="fbc fbc-page">\r\n\r\n\t\t\t\t<!-- Breadcrumb wrapper -->\r\n\t\t\t\t<div class="fbc-wrap">\r\n\r\n\t\t\t\t\t<!-- Ordered list-->\r\n\t\t\t\t\t<ol class="fbc-items" itemscope itemtype="https://schema.org/BreadcrumbList">\r\n\t\t\t\t\t\t            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">\n                <span itemprop="name">\n                    <!-- Home Link -->\n                    <a itemprop="item" href="/">\n                    \n                                                    <i class="fa fa-home" aria-hidden="true"></i>Home                    </a>\n                </span>\n                <meta itemprop="position" content="1" /><!-- Meta Position-->\n             </li><li><span class="fbc-separator">»</span></li><li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a itemprop="item" page-parent="466" href="/residential/" title="Residential"><span itemprop="name">Residential</span></a><meta itemprop="position" content="2" /></li><li><span class="fbc-separator">»</span></li><li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a itemprop="item" page-parent="470" href="/residential/cooling/" title="Cooling"><span itemprop="name">Cooling</span></a><meta itemprop="position" content="3" /></li><li><span class="fbc-separator">»</span></li><li class="active post-page" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><span itemprop="name" title="Air Conditioner Repair">Air Conditioner Repair</span><meta itemprop="position" content="4" /></li>\t\t\t\t\t</ol>\r\n\t\t\t\t\t<div class="clearfix"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\n',
  }
}

export const Primary = Template.bind({})
Primary.args = BreadcrumbFunction()
