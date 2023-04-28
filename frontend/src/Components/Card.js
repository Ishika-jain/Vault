function Breadcrumb(props) {
    const segments = props.url.split('/').filter(Boolean);
  
    const items = segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={href} href={href}>
          {segment}
        </Breadcrumb.Item>
      );
    });
  
    items.unshift(
      <Breadcrumb.Item key="home" href="/">
        Home
      </Breadcrumb.Item>
    );
  
    return <Breadcrumb>{items}</Breadcrumb>;
  }
  