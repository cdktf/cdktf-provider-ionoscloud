# `vpnWireguardGateway` Submodule <a name="`vpnWireguardGateway` Submodule" id="@cdktf/provider-ionoscloud.vpnWireguardGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnWireguardGateway <a name="VpnWireguardGateway" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway ionoscloud_vpn_wireguard_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vpn_wireguard_gateway

vpnWireguardGateway.VpnWireguardGateway(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connections: typing.Union[IResolvable, typing.List[VpnWireguardGatewayConnections]],
  gateway_ip: str,
  name: str,
  private_key: str,
  description: str = None,
  id: str = None,
  interface_ipv4_cidr: str = None,
  interface_ipv6_cidr: str = None,
  listen_port: typing.Union[int, float] = None,
  location: str = None,
  maintenance_window: VpnWireguardGatewayMaintenanceWindow = None,
  tier: str = None,
  timeouts: VpnWireguardGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.connections">connections</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>]]</code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.gatewayIp">gateway_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#gateway_ip VpnWireguardGateway#gateway_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#name VpnWireguardGateway#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | PrivateKey used for WireGuard Server. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#description VpnWireguardGateway#description}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#id VpnWireguardGateway#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.interfaceIpv4Cidr">interface_ipv4_cidr</a></code> | <code>str</code> | The IPV4 address (with CIDR mask) to be assigned to the WireGuard interface. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.interfaceIpv6Cidr">interface_ipv6_cidr</a></code> | <code>str</code> | The IPV6 address (with CIDR mask) to be assigned to the WireGuard interface. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.listenPort">listen_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#listen_port VpnWireguardGateway#listen_port}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the WireGuard Gateway. Supported locations: de/fra, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.tier">tier</a></code> | <code>str</code> | Gateway performance options. See the documentation for the available options. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.connections"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>]]

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#connections VpnWireguardGateway#connections}

---

##### `gateway_ip`<sup>Required</sup> <a name="gateway_ip" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.gatewayIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#gateway_ip VpnWireguardGateway#gateway_ip}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#name VpnWireguardGateway#name}.

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.privateKey"></a>

- *Type:* str

PrivateKey used for WireGuard Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#private_key VpnWireguardGateway#private_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#description VpnWireguardGateway#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#id VpnWireguardGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interface_ipv4_cidr`<sup>Optional</sup> <a name="interface_ipv4_cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.interfaceIpv4Cidr"></a>

- *Type:* str

The IPV4 address (with CIDR mask) to be assigned to the WireGuard interface.

**Note**: either interfaceIPv4CIDR or interfaceIPv6CIDR is **required**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#interface_ipv4_cidr VpnWireguardGateway#interface_ipv4_cidr}

---

##### `interface_ipv6_cidr`<sup>Optional</sup> <a name="interface_ipv6_cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.interfaceIpv6Cidr"></a>

- *Type:* str

The IPV6 address (with CIDR mask) to be assigned to the WireGuard interface.

**Note**: either interfaceIPv6CIDR or interfaceIPv4CIDR is **required**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#interface_ipv6_cidr VpnWireguardGateway#interface_ipv6_cidr}

---

##### `listen_port`<sup>Optional</sup> <a name="listen_port" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.listenPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#listen_port VpnWireguardGateway#listen_port}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.location"></a>

- *Type:* str

The location of the WireGuard Gateway. Supported locations: de/fra, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#location VpnWireguardGateway#location}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#maintenance_window VpnWireguardGateway#maintenance_window}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.tier"></a>

- *Type:* str

Gateway performance options. See the documentation for the available options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#tier VpnWireguardGateway#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#timeouts VpnWireguardGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putConnections">put_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetInterfaceIpv4Cidr">reset_interface_ipv4_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetInterfaceIpv6Cidr">reset_interface_ipv6_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetListenPort">reset_listen_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetTier">reset_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connections` <a name="put_connections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putConnections"></a>

```python
def put_connections(
  value: typing.Union[IResolvable, typing.List[VpnWireguardGatewayConnections]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putConnections.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>]]

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  day_of_the_week: str,
  time: str
) -> None
```

###### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putMaintenanceWindow.parameter.dayOfTheWeek"></a>

- *Type:* str

The name of the week day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#day_of_the_week VpnWireguardGateway#day_of_the_week}

---

###### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putMaintenanceWindow.parameter.time"></a>

- *Type:* str

Start of the maintenance window in UTC time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#time VpnWireguardGateway#time}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#create VpnWireguardGateway#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#default VpnWireguardGateway#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#delete VpnWireguardGateway#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#update VpnWireguardGateway#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_interface_ipv4_cidr` <a name="reset_interface_ipv4_cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetInterfaceIpv4Cidr"></a>

```python
def reset_interface_ipv4_cidr() -> None
```

##### `reset_interface_ipv6_cidr` <a name="reset_interface_ipv6_cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetInterfaceIpv6Cidr"></a>

```python
def reset_interface_ipv6_cidr() -> None
```

##### `reset_listen_port` <a name="reset_listen_port" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetListenPort"></a>

```python
def reset_listen_port() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_tier` <a name="reset_tier" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetTier"></a>

```python
def reset_tier() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VpnWireguardGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vpn_wireguard_gateway

vpnWireguardGateway.VpnWireguardGateway.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vpn_wireguard_gateway

vpnWireguardGateway.VpnWireguardGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vpn_wireguard_gateway

vpnWireguardGateway.VpnWireguardGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vpn_wireguard_gateway

vpnWireguardGateway.VpnWireguardGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VpnWireguardGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VpnWireguardGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VpnWireguardGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpnWireguardGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList">VpnWireguardGatewayConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference">VpnWireguardGatewayMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference">VpnWireguardGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connectionsInput">connections_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.gatewayIpInput">gateway_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv4CidrInput">interface_ipv4_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv6CidrInput">interface_ipv6_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.listenPortInput">listen_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.gatewayIp">gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv4Cidr">interface_ipv4_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv6Cidr">interface_ipv6_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.listenPort">listen_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tier">tier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connections"></a>

```python
connections: VpnWireguardGatewayConnectionsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList">VpnWireguardGatewayConnectionsList</a>

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.maintenanceWindow"></a>

```python
maintenance_window: VpnWireguardGatewayMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference">VpnWireguardGatewayMaintenanceWindowOutputReference</a>

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.timeouts"></a>

```python
timeouts: VpnWireguardGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference">VpnWireguardGatewayTimeoutsOutputReference</a>

---

##### `connections_input`<sup>Optional</sup> <a name="connections_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connectionsInput"></a>

```python
connections_input: typing.Union[IResolvable, typing.List[VpnWireguardGatewayConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `gateway_ip_input`<sup>Optional</sup> <a name="gateway_ip_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.gatewayIpInput"></a>

```python
gateway_ip_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interface_ipv4_cidr_input`<sup>Optional</sup> <a name="interface_ipv4_cidr_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv4CidrInput"></a>

```python
interface_ipv4_cidr_input: str
```

- *Type:* str

---

##### `interface_ipv6_cidr_input`<sup>Optional</sup> <a name="interface_ipv6_cidr_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv6CidrInput"></a>

```python
interface_ipv6_cidr_input: str
```

- *Type:* str

---

##### `listen_port_input`<sup>Optional</sup> <a name="listen_port_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.listenPortInput"></a>

```python
listen_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: VpnWireguardGatewayMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VpnWireguardGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `gateway_ip`<sup>Required</sup> <a name="gateway_ip" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.gatewayIp"></a>

```python
gateway_ip: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interface_ipv4_cidr`<sup>Required</sup> <a name="interface_ipv4_cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv4Cidr"></a>

```python
interface_ipv4_cidr: str
```

- *Type:* str

---

##### `interface_ipv6_cidr`<sup>Required</sup> <a name="interface_ipv6_cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv6Cidr"></a>

```python
interface_ipv6_cidr: str
```

- *Type:* str

---

##### `listen_port`<sup>Required</sup> <a name="listen_port" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.listenPort"></a>

```python
listen_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpnWireguardGatewayConfig <a name="VpnWireguardGatewayConfig" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vpn_wireguard_gateway

vpnWireguardGateway.VpnWireguardGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connections: typing.Union[IResolvable, typing.List[VpnWireguardGatewayConnections]],
  gateway_ip: str,
  name: str,
  private_key: str,
  description: str = None,
  id: str = None,
  interface_ipv4_cidr: str = None,
  interface_ipv6_cidr: str = None,
  listen_port: typing.Union[int, float] = None,
  location: str = None,
  maintenance_window: VpnWireguardGatewayMaintenanceWindow = None,
  tier: str = None,
  timeouts: VpnWireguardGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.connections">connections</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>]]</code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.gatewayIp">gateway_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#gateway_ip VpnWireguardGateway#gateway_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#name VpnWireguardGateway#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.privateKey">private_key</a></code> | <code>str</code> | PrivateKey used for WireGuard Server. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#description VpnWireguardGateway#description}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#id VpnWireguardGateway#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.interfaceIpv4Cidr">interface_ipv4_cidr</a></code> | <code>str</code> | The IPV4 address (with CIDR mask) to be assigned to the WireGuard interface. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.interfaceIpv6Cidr">interface_ipv6_cidr</a></code> | <code>str</code> | The IPV6 address (with CIDR mask) to be assigned to the WireGuard interface. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.listenPort">listen_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#listen_port VpnWireguardGateway#listen_port}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.location">location</a></code> | <code>str</code> | The location of the WireGuard Gateway. Supported locations: de/fra, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.tier">tier</a></code> | <code>str</code> | Gateway performance options. See the documentation for the available options. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.connections"></a>

```python
connections: typing.Union[IResolvable, typing.List[VpnWireguardGatewayConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>]]

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#connections VpnWireguardGateway#connections}

---

##### `gateway_ip`<sup>Required</sup> <a name="gateway_ip" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.gatewayIp"></a>

```python
gateway_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#gateway_ip VpnWireguardGateway#gateway_ip}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#name VpnWireguardGateway#name}.

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

PrivateKey used for WireGuard Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#private_key VpnWireguardGateway#private_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#description VpnWireguardGateway#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#id VpnWireguardGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interface_ipv4_cidr`<sup>Optional</sup> <a name="interface_ipv4_cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.interfaceIpv4Cidr"></a>

```python
interface_ipv4_cidr: str
```

- *Type:* str

The IPV4 address (with CIDR mask) to be assigned to the WireGuard interface.

**Note**: either interfaceIPv4CIDR or interfaceIPv6CIDR is **required**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#interface_ipv4_cidr VpnWireguardGateway#interface_ipv4_cidr}

---

##### `interface_ipv6_cidr`<sup>Optional</sup> <a name="interface_ipv6_cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.interfaceIpv6Cidr"></a>

```python
interface_ipv6_cidr: str
```

- *Type:* str

The IPV6 address (with CIDR mask) to be assigned to the WireGuard interface.

**Note**: either interfaceIPv6CIDR or interfaceIPv4CIDR is **required**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#interface_ipv6_cidr VpnWireguardGateway#interface_ipv6_cidr}

---

##### `listen_port`<sup>Optional</sup> <a name="listen_port" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.listenPort"></a>

```python
listen_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#listen_port VpnWireguardGateway#listen_port}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the WireGuard Gateway. Supported locations: de/fra, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#location VpnWireguardGateway#location}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.maintenanceWindow"></a>

```python
maintenance_window: VpnWireguardGatewayMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#maintenance_window VpnWireguardGateway#maintenance_window}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.tier"></a>

```python
tier: str
```

- *Type:* str

Gateway performance options. See the documentation for the available options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#tier VpnWireguardGateway#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.timeouts"></a>

```python
timeouts: VpnWireguardGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#timeouts VpnWireguardGateway#timeouts}

---

### VpnWireguardGatewayConnections <a name="VpnWireguardGatewayConnections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vpn_wireguard_gateway

vpnWireguardGateway.VpnWireguardGatewayConnections(
  datacenter_id: str,
  lan_id: str,
  ipv4_cidr: str = None,
  ipv6_cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#datacenter_id VpnWireguardGateway#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.lanId">lan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#lan_id VpnWireguardGateway#lan_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.ipv4Cidr">ipv4_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#ipv4_cidr VpnWireguardGateway#ipv4_cidr}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.ipv6Cidr">ipv6_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#ipv6_cidr VpnWireguardGateway#ipv6_cidr}. |

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#datacenter_id VpnWireguardGateway#datacenter_id}.

---

##### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.lanId"></a>

```python
lan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#lan_id VpnWireguardGateway#lan_id}.

---

##### `ipv4_cidr`<sup>Optional</sup> <a name="ipv4_cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.ipv4Cidr"></a>

```python
ipv4_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#ipv4_cidr VpnWireguardGateway#ipv4_cidr}.

---

##### `ipv6_cidr`<sup>Optional</sup> <a name="ipv6_cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.ipv6Cidr"></a>

```python
ipv6_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#ipv6_cidr VpnWireguardGateway#ipv6_cidr}.

---

### VpnWireguardGatewayMaintenanceWindow <a name="VpnWireguardGatewayMaintenanceWindow" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vpn_wireguard_gateway

vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow(
  day_of_the_week: str,
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow.property.dayOfTheWeek">day_of_the_week</a></code> | <code>str</code> | The name of the week day. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow.property.time">time</a></code> | <code>str</code> | Start of the maintenance window in UTC time. |

---

##### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow.property.dayOfTheWeek"></a>

```python
day_of_the_week: str
```

- *Type:* str

The name of the week day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#day_of_the_week VpnWireguardGateway#day_of_the_week}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow.property.time"></a>

```python
time: str
```

- *Type:* str

Start of the maintenance window in UTC time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#time VpnWireguardGateway#time}

---

### VpnWireguardGatewayTimeouts <a name="VpnWireguardGatewayTimeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vpn_wireguard_gateway

vpnWireguardGateway.VpnWireguardGatewayTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#create VpnWireguardGateway#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#default VpnWireguardGateway#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#delete VpnWireguardGateway#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#update VpnWireguardGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#create VpnWireguardGateway#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#default VpnWireguardGateway#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#delete VpnWireguardGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/vpn_wireguard_gateway#update VpnWireguardGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnWireguardGatewayConnectionsList <a name="VpnWireguardGatewayConnectionsList" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vpn_wireguard_gateway

vpnWireguardGateway.VpnWireguardGatewayConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpnWireguardGatewayConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpnWireguardGatewayConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>]]

---


### VpnWireguardGatewayConnectionsOutputReference <a name="VpnWireguardGatewayConnectionsOutputReference" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vpn_wireguard_gateway

vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resetIpv4Cidr">reset_ipv4_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resetIpv6Cidr">reset_ipv6_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ipv4_cidr` <a name="reset_ipv4_cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resetIpv4Cidr"></a>

```python
def reset_ipv4_cidr() -> None
```

##### `reset_ipv6_cidr` <a name="reset_ipv6_cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resetIpv6Cidr"></a>

```python
def reset_ipv6_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv4CidrInput">ipv4_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv6CidrInput">ipv6_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.lanIdInput">lan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv4Cidr">ipv4_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv6Cidr">ipv6_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.lanId">lan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `ipv4_cidr_input`<sup>Optional</sup> <a name="ipv4_cidr_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv4CidrInput"></a>

```python
ipv4_cidr_input: str
```

- *Type:* str

---

##### `ipv6_cidr_input`<sup>Optional</sup> <a name="ipv6_cidr_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv6CidrInput"></a>

```python
ipv6_cidr_input: str
```

- *Type:* str

---

##### `lan_id_input`<sup>Optional</sup> <a name="lan_id_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.lanIdInput"></a>

```python
lan_id_input: str
```

- *Type:* str

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `ipv4_cidr`<sup>Required</sup> <a name="ipv4_cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv4Cidr"></a>

```python
ipv4_cidr: str
```

- *Type:* str

---

##### `ipv6_cidr`<sup>Required</sup> <a name="ipv6_cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv6Cidr"></a>

```python
ipv6_cidr: str
```

- *Type:* str

---

##### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.lanId"></a>

```python
lan_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpnWireguardGatewayConnections]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>]

---


### VpnWireguardGatewayMaintenanceWindowOutputReference <a name="VpnWireguardGatewayMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vpn_wireguard_gateway

vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.dayOfTheWeekInput">day_of_the_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.dayOfTheWeek">day_of_the_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_the_week_input`<sup>Optional</sup> <a name="day_of_the_week_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```python
day_of_the_week_input: str
```

- *Type:* str

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```python
day_of_the_week: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: VpnWireguardGatewayMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a>

---


### VpnWireguardGatewayTimeoutsOutputReference <a name="VpnWireguardGatewayTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import vpn_wireguard_gateway

vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpnWireguardGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a>]

---



