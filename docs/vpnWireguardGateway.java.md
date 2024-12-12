# `vpnWireguardGateway` Submodule <a name="`vpnWireguardGateway` Submodule" id="@cdktf/provider-ionoscloud.vpnWireguardGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnWireguardGateway <a name="VpnWireguardGateway" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway ionoscloud_vpn_wireguard_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_wireguard_gateway.VpnWireguardGateway;

VpnWireguardGateway.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .connections(IResolvable)
    .connections(java.util.List<VpnWireguardGatewayConnections>)
    .gatewayIp(java.lang.String)
    .name(java.lang.String)
    .privateKey(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .interfaceIpv4Cidr(java.lang.String)
//  .interfaceIpv6Cidr(java.lang.String)
//  .listenPort(java.lang.Number)
//  .location(java.lang.String)
//  .maintenanceWindow(VpnWireguardGatewayMaintenanceWindow)
//  .tier(java.lang.String)
//  .timeouts(VpnWireguardGatewayTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.connections">connections</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>></code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.gatewayIp">gatewayIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#gateway_ip VpnWireguardGateway#gateway_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#name VpnWireguardGateway#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | PrivateKey used for WireGuard Server. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#description VpnWireguardGateway#description}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#id VpnWireguardGateway#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.interfaceIpv4Cidr">interfaceIpv4Cidr</a></code> | <code>java.lang.String</code> | The IPV4 address (with CIDR mask) to be assigned to the WireGuard interface. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.interfaceIpv6Cidr">interfaceIpv6Cidr</a></code> | <code>java.lang.String</code> | The IPV6 address (with CIDR mask) to be assigned to the WireGuard interface. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.listenPort">listenPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#listen_port VpnWireguardGateway#listen_port}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the WireGuard Gateway. Supported locations: de/fra, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | Gateway performance options. See the documentation for the available options. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.connections"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#connections VpnWireguardGateway#connections}

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.gatewayIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#gateway_ip VpnWireguardGateway#gateway_ip}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#name VpnWireguardGateway#name}.

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

PrivateKey used for WireGuard Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#private_key VpnWireguardGateway#private_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#description VpnWireguardGateway#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#id VpnWireguardGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interfaceIpv4Cidr`<sup>Optional</sup> <a name="interfaceIpv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.interfaceIpv4Cidr"></a>

- *Type:* java.lang.String

The IPV4 address (with CIDR mask) to be assigned to the WireGuard interface.

**Note**: either interfaceIPv4CIDR or interfaceIPv6CIDR is **required**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#interface_ipv4_cidr VpnWireguardGateway#interface_ipv4_cidr}

---

##### `interfaceIpv6Cidr`<sup>Optional</sup> <a name="interfaceIpv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.interfaceIpv6Cidr"></a>

- *Type:* java.lang.String

The IPV6 address (with CIDR mask) to be assigned to the WireGuard interface.

**Note**: either interfaceIPv6CIDR or interfaceIPv4CIDR is **required**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#interface_ipv6_cidr VpnWireguardGateway#interface_ipv6_cidr}

---

##### `listenPort`<sup>Optional</sup> <a name="listenPort" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.listenPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#listen_port VpnWireguardGateway#listen_port}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the WireGuard Gateway. Supported locations: de/fra, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#location VpnWireguardGateway#location}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#maintenance_window VpnWireguardGateway#maintenance_window}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

Gateway performance options. See the documentation for the available options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#tier VpnWireguardGateway#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#timeouts VpnWireguardGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putConnections">putConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetInterfaceIpv4Cidr">resetInterfaceIpv4Cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetInterfaceIpv6Cidr">resetInterfaceIpv6Cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetListenPort">resetListenPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnections` <a name="putConnections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putConnections"></a>

```java
public void putConnections(IResolvable OR java.util.List<VpnWireguardGatewayConnections> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putConnections.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(VpnWireguardGatewayMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putTimeouts"></a>

```java
public void putTimeouts(VpnWireguardGatewayTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetId"></a>

```java
public void resetId()
```

##### `resetInterfaceIpv4Cidr` <a name="resetInterfaceIpv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetInterfaceIpv4Cidr"></a>

```java
public void resetInterfaceIpv4Cidr()
```

##### `resetInterfaceIpv6Cidr` <a name="resetInterfaceIpv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetInterfaceIpv6Cidr"></a>

```java
public void resetInterfaceIpv6Cidr()
```

##### `resetListenPort` <a name="resetListenPort" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetListenPort"></a>

```java
public void resetListenPort()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetTier` <a name="resetTier" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetTier"></a>

```java
public void resetTier()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpnWireguardGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_wireguard_gateway.VpnWireguardGateway;

VpnWireguardGateway.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_wireguard_gateway.VpnWireguardGateway;

VpnWireguardGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_wireguard_gateway.VpnWireguardGateway;

VpnWireguardGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_wireguard_gateway.VpnWireguardGateway;

VpnWireguardGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpnWireguardGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VpnWireguardGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpnWireguardGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpnWireguardGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VpnWireguardGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList">VpnWireguardGatewayConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference">VpnWireguardGatewayMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference">VpnWireguardGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connectionsInput">connectionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.gatewayIpInput">gatewayIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv4CidrInput">interfaceIpv4CidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv6CidrInput">interfaceIpv6CidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.listenPortInput">listenPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.gatewayIp">gatewayIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv4Cidr">interfaceIpv4Cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv6Cidr">interfaceIpv6Cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.listenPort">listenPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connections"></a>

```java
public VpnWireguardGatewayConnectionsList getConnections();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList">VpnWireguardGatewayConnectionsList</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.maintenanceWindow"></a>

```java
public VpnWireguardGatewayMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference">VpnWireguardGatewayMaintenanceWindowOutputReference</a>

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.timeouts"></a>

```java
public VpnWireguardGatewayTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference">VpnWireguardGatewayTimeoutsOutputReference</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connectionsInput"></a>

```java
public java.lang.Object getConnectionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `gatewayIpInput`<sup>Optional</sup> <a name="gatewayIpInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.gatewayIpInput"></a>

```java
public java.lang.String getGatewayIpInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `interfaceIpv4CidrInput`<sup>Optional</sup> <a name="interfaceIpv4CidrInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv4CidrInput"></a>

```java
public java.lang.String getInterfaceIpv4CidrInput();
```

- *Type:* java.lang.String

---

##### `interfaceIpv6CidrInput`<sup>Optional</sup> <a name="interfaceIpv6CidrInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv6CidrInput"></a>

```java
public java.lang.String getInterfaceIpv6CidrInput();
```

- *Type:* java.lang.String

---

##### `listenPortInput`<sup>Optional</sup> <a name="listenPortInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.listenPortInput"></a>

```java
public java.lang.Number getListenPortInput();
```

- *Type:* java.lang.Number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.maintenanceWindowInput"></a>

```java
public VpnWireguardGatewayMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.gatewayIp"></a>

```java
public java.lang.String getGatewayIp();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interfaceIpv4Cidr`<sup>Required</sup> <a name="interfaceIpv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv4Cidr"></a>

```java
public java.lang.String getInterfaceIpv4Cidr();
```

- *Type:* java.lang.String

---

##### `interfaceIpv6Cidr`<sup>Required</sup> <a name="interfaceIpv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv6Cidr"></a>

```java
public java.lang.String getInterfaceIpv6Cidr();
```

- *Type:* java.lang.String

---

##### `listenPort`<sup>Required</sup> <a name="listenPort" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.listenPort"></a>

```java
public java.lang.Number getListenPort();
```

- *Type:* java.lang.Number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpnWireguardGatewayConfig <a name="VpnWireguardGatewayConfig" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_wireguard_gateway.VpnWireguardGatewayConfig;

VpnWireguardGatewayConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .connections(IResolvable)
    .connections(java.util.List<VpnWireguardGatewayConnections>)
    .gatewayIp(java.lang.String)
    .name(java.lang.String)
    .privateKey(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .interfaceIpv4Cidr(java.lang.String)
//  .interfaceIpv6Cidr(java.lang.String)
//  .listenPort(java.lang.Number)
//  .location(java.lang.String)
//  .maintenanceWindow(VpnWireguardGatewayMaintenanceWindow)
//  .tier(java.lang.String)
//  .timeouts(VpnWireguardGatewayTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.connections">connections</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>></code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.gatewayIp">gatewayIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#gateway_ip VpnWireguardGateway#gateway_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#name VpnWireguardGateway#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | PrivateKey used for WireGuard Server. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#description VpnWireguardGateway#description}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#id VpnWireguardGateway#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.interfaceIpv4Cidr">interfaceIpv4Cidr</a></code> | <code>java.lang.String</code> | The IPV4 address (with CIDR mask) to be assigned to the WireGuard interface. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.interfaceIpv6Cidr">interfaceIpv6Cidr</a></code> | <code>java.lang.String</code> | The IPV6 address (with CIDR mask) to be assigned to the WireGuard interface. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.listenPort">listenPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#listen_port VpnWireguardGateway#listen_port}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the WireGuard Gateway. Supported locations: de/fra, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | Gateway performance options. See the documentation for the available options. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.connections"></a>

```java
public java.lang.Object getConnections();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#connections VpnWireguardGateway#connections}

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.gatewayIp"></a>

```java
public java.lang.String getGatewayIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#gateway_ip VpnWireguardGateway#gateway_ip}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#name VpnWireguardGateway#name}.

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

PrivateKey used for WireGuard Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#private_key VpnWireguardGateway#private_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#description VpnWireguardGateway#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#id VpnWireguardGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interfaceIpv4Cidr`<sup>Optional</sup> <a name="interfaceIpv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.interfaceIpv4Cidr"></a>

```java
public java.lang.String getInterfaceIpv4Cidr();
```

- *Type:* java.lang.String

The IPV4 address (with CIDR mask) to be assigned to the WireGuard interface.

**Note**: either interfaceIPv4CIDR or interfaceIPv6CIDR is **required**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#interface_ipv4_cidr VpnWireguardGateway#interface_ipv4_cidr}

---

##### `interfaceIpv6Cidr`<sup>Optional</sup> <a name="interfaceIpv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.interfaceIpv6Cidr"></a>

```java
public java.lang.String getInterfaceIpv6Cidr();
```

- *Type:* java.lang.String

The IPV6 address (with CIDR mask) to be assigned to the WireGuard interface.

**Note**: either interfaceIPv6CIDR or interfaceIPv4CIDR is **required**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#interface_ipv6_cidr VpnWireguardGateway#interface_ipv6_cidr}

---

##### `listenPort`<sup>Optional</sup> <a name="listenPort" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.listenPort"></a>

```java
public java.lang.Number getListenPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#listen_port VpnWireguardGateway#listen_port}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the WireGuard Gateway. Supported locations: de/fra, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#location VpnWireguardGateway#location}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.maintenanceWindow"></a>

```java
public VpnWireguardGatewayMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#maintenance_window VpnWireguardGateway#maintenance_window}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

Gateway performance options. See the documentation for the available options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#tier VpnWireguardGateway#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.timeouts"></a>

```java
public VpnWireguardGatewayTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#timeouts VpnWireguardGateway#timeouts}

---

### VpnWireguardGatewayConnections <a name="VpnWireguardGatewayConnections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_wireguard_gateway.VpnWireguardGatewayConnections;

VpnWireguardGatewayConnections.builder()
    .datacenterId(java.lang.String)
    .lanId(java.lang.String)
//  .ipv4Cidr(java.lang.String)
//  .ipv6Cidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#datacenter_id VpnWireguardGateway#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.lanId">lanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#lan_id VpnWireguardGateway#lan_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.ipv4Cidr">ipv4Cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#ipv4_cidr VpnWireguardGateway#ipv4_cidr}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.ipv6Cidr">ipv6Cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#ipv6_cidr VpnWireguardGateway#ipv6_cidr}. |

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#datacenter_id VpnWireguardGateway#datacenter_id}.

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.lanId"></a>

```java
public java.lang.String getLanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#lan_id VpnWireguardGateway#lan_id}.

---

##### `ipv4Cidr`<sup>Optional</sup> <a name="ipv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.ipv4Cidr"></a>

```java
public java.lang.String getIpv4Cidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#ipv4_cidr VpnWireguardGateway#ipv4_cidr}.

---

##### `ipv6Cidr`<sup>Optional</sup> <a name="ipv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.ipv6Cidr"></a>

```java
public java.lang.String getIpv6Cidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#ipv6_cidr VpnWireguardGateway#ipv6_cidr}.

---

### VpnWireguardGatewayMaintenanceWindow <a name="VpnWireguardGatewayMaintenanceWindow" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_wireguard_gateway.VpnWireguardGatewayMaintenanceWindow;

VpnWireguardGatewayMaintenanceWindow.builder()
    .dayOfTheWeek(java.lang.String)
    .time(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>java.lang.String</code> | The name of the week day. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow.property.time">time</a></code> | <code>java.lang.String</code> | Start of the maintenance window in UTC time. |

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow.property.dayOfTheWeek"></a>

```java
public java.lang.String getDayOfTheWeek();
```

- *Type:* java.lang.String

The name of the week day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#day_of_the_week VpnWireguardGateway#day_of_the_week}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

Start of the maintenance window in UTC time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#time VpnWireguardGateway#time}

---

### VpnWireguardGatewayTimeouts <a name="VpnWireguardGatewayTimeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_wireguard_gateway.VpnWireguardGatewayTimeouts;

VpnWireguardGatewayTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#create VpnWireguardGateway#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#default VpnWireguardGateway#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#delete VpnWireguardGateway#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#update VpnWireguardGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#create VpnWireguardGateway#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#default VpnWireguardGateway#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#delete VpnWireguardGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/resources/vpn_wireguard_gateway#update VpnWireguardGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnWireguardGatewayConnectionsList <a name="VpnWireguardGatewayConnectionsList" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_wireguard_gateway.VpnWireguardGatewayConnectionsList;

new VpnWireguardGatewayConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.get"></a>

```java
public VpnWireguardGatewayConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>>

---


### VpnWireguardGatewayConnectionsOutputReference <a name="VpnWireguardGatewayConnectionsOutputReference" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_wireguard_gateway.VpnWireguardGatewayConnectionsOutputReference;

new VpnWireguardGatewayConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resetIpv4Cidr">resetIpv4Cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resetIpv6Cidr">resetIpv6Cidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv4Cidr` <a name="resetIpv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resetIpv4Cidr"></a>

```java
public void resetIpv4Cidr()
```

##### `resetIpv6Cidr` <a name="resetIpv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resetIpv6Cidr"></a>

```java
public void resetIpv6Cidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv4CidrInput">ipv4CidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv6CidrInput">ipv6CidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.lanIdInput">lanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv4Cidr">ipv4Cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv6Cidr">ipv6Cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.lanId">lanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `ipv4CidrInput`<sup>Optional</sup> <a name="ipv4CidrInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv4CidrInput"></a>

```java
public java.lang.String getIpv4CidrInput();
```

- *Type:* java.lang.String

---

##### `ipv6CidrInput`<sup>Optional</sup> <a name="ipv6CidrInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv6CidrInput"></a>

```java
public java.lang.String getIpv6CidrInput();
```

- *Type:* java.lang.String

---

##### `lanIdInput`<sup>Optional</sup> <a name="lanIdInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.lanIdInput"></a>

```java
public java.lang.String getLanIdInput();
```

- *Type:* java.lang.String

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `ipv4Cidr`<sup>Required</sup> <a name="ipv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv4Cidr"></a>

```java
public java.lang.String getIpv4Cidr();
```

- *Type:* java.lang.String

---

##### `ipv6Cidr`<sup>Required</sup> <a name="ipv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv6Cidr"></a>

```java
public java.lang.String getIpv6Cidr();
```

- *Type:* java.lang.String

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.lanId"></a>

```java
public java.lang.String getLanId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>

---


### VpnWireguardGatewayMaintenanceWindowOutputReference <a name="VpnWireguardGatewayMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_wireguard_gateway.VpnWireguardGatewayMaintenanceWindowOutputReference;

new VpnWireguardGatewayMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.dayOfTheWeekInput">dayOfTheWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.timeInput">timeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.time">time</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfTheWeekInput`<sup>Optional</sup> <a name="dayOfTheWeekInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```java
public java.lang.String getDayOfTheWeekInput();
```

- *Type:* java.lang.String

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.timeInput"></a>

```java
public java.lang.String getTimeInput();
```

- *Type:* java.lang.String

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```java
public java.lang.String getDayOfTheWeek();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public VpnWireguardGatewayMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a>

---


### VpnWireguardGatewayTimeoutsOutputReference <a name="VpnWireguardGatewayTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_wireguard_gateway.VpnWireguardGatewayTimeoutsOutputReference;

new VpnWireguardGatewayTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a>

---



