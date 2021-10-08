const getTextTotalLine = (el) => {
    let divHeight = 1;
    if (el.tagName === 'TEXTAREA') {
      divHeight = el.scrollHeight;
    } else {
      divHeight = el.offsetHeight;
    }
    let lineHeight = window
      .getComputedStyle(el, null)
      .getPropertyValue('line-height');
    lineHeight = parseFloat(lineHeight.split('px')[0]);
    let totalLine = Math.ceil(divHeight / lineHeight);
    return totalLine;
  }

const onChange = () => {
  const totalLine = getTextTotalLine(anchorEl.current);
}

return (
		<div className={elementClass}>
			<textarea onChange={onChange} value={value} id={`${classPrefix}-textarea${instanceId}`} placeholder={placeholder} ref={anchorEl} />
		</div>
	);
