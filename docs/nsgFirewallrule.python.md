# `nsgFirewallrule` Submodule <a name="`nsgFirewallrule` Submodule" id="@cdktf/provider-ionoscloud.nsgFirewallrule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NsgFirewallrule <a name="NsgFirewallrule" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule ionoscloud_nsg_firewallrule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nsg_firewallrule

nsgFirewallrule.NsgFirewallrule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  nsg_id: str,
  protocol: str,
  icmp_code: str = None,
  icmp_type: str = None,
  id: str = None,
  name: str = None,
  port_range_end: typing.Union[int, float] = None,
  port_range_start: typing.Union[int, float] = None,
  source_ip: str = None,
  source_mac: str = None,
  target_ip: str = None,
  timeouts: NsgFirewallruleTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#datacenter_id NsgFirewallrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.nsgId">nsg_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#nsg_id NsgFirewallrule#nsg_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#protocol NsgFirewallrule#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.icmpCode">icmp_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#icmp_code NsgFirewallrule#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.icmpType">icmp_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#icmp_type NsgFirewallrule#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#id NsgFirewallrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#name NsgFirewallrule#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.portRangeEnd">port_range_end</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#port_range_end NsgFirewallrule#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.portRangeStart">port_range_start</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#port_range_start NsgFirewallrule#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.sourceIp">source_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#source_ip NsgFirewallrule#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.sourceMac">source_mac</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#source_mac NsgFirewallrule#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.targetIp">target_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#target_ip NsgFirewallrule#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#type NsgFirewallrule#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.datacenterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#datacenter_id NsgFirewallrule#datacenter_id}.

---

##### `nsg_id`<sup>Required</sup> <a name="nsg_id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.nsgId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#nsg_id NsgFirewallrule#nsg_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#protocol NsgFirewallrule#protocol}.

---

##### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.icmpCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#icmp_code NsgFirewallrule#icmp_code}.

---

##### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.icmpType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#icmp_type NsgFirewallrule#icmp_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#id NsgFirewallrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#name NsgFirewallrule#name}.

---

##### `port_range_end`<sup>Optional</sup> <a name="port_range_end" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.portRangeEnd"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#port_range_end NsgFirewallrule#port_range_end}.

---

##### `port_range_start`<sup>Optional</sup> <a name="port_range_start" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.portRangeStart"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#port_range_start NsgFirewallrule#port_range_start}.

---

##### `source_ip`<sup>Optional</sup> <a name="source_ip" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.sourceIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#source_ip NsgFirewallrule#source_ip}.

---

##### `source_mac`<sup>Optional</sup> <a name="source_mac" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.sourceMac"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#source_mac NsgFirewallrule#source_mac}.

---

##### `target_ip`<sup>Optional</sup> <a name="target_ip" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.targetIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#target_ip NsgFirewallrule#target_ip}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#timeouts NsgFirewallrule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#type NsgFirewallrule#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetIcmpCode">reset_icmp_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetIcmpType">reset_icmp_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetPortRangeEnd">reset_port_range_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetPortRangeStart">reset_port_range_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetSourceIp">reset_source_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetSourceMac">reset_source_mac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetTargetIp">reset_target_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#create NsgFirewallrule#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#default NsgFirewallrule#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#delete NsgFirewallrule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#update NsgFirewallrule#update}.

---

##### `reset_icmp_code` <a name="reset_icmp_code" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetIcmpCode"></a>

```python
def reset_icmp_code() -> None
```

##### `reset_icmp_type` <a name="reset_icmp_type" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetIcmpType"></a>

```python
def reset_icmp_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_port_range_end` <a name="reset_port_range_end" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetPortRangeEnd"></a>

```python
def reset_port_range_end() -> None
```

##### `reset_port_range_start` <a name="reset_port_range_start" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetPortRangeStart"></a>

```python
def reset_port_range_start() -> None
```

##### `reset_source_ip` <a name="reset_source_ip" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetSourceIp"></a>

```python
def reset_source_ip() -> None
```

##### `reset_source_mac` <a name="reset_source_mac" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetSourceMac"></a>

```python
def reset_source_mac() -> None
```

##### `reset_target_ip` <a name="reset_target_ip" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetTargetIp"></a>

```python
def reset_target_ip() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NsgFirewallrule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nsg_firewallrule

nsgFirewallrule.NsgFirewallrule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nsg_firewallrule

nsgFirewallrule.NsgFirewallrule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nsg_firewallrule

nsgFirewallrule.NsgFirewallrule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nsg_firewallrule

nsgFirewallrule.NsgFirewallrule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NsgFirewallrule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NsgFirewallrule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NsgFirewallrule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NsgFirewallrule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference">NsgFirewallruleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpCodeInput">icmp_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpTypeInput">icmp_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nsgIdInput">nsg_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeEndInput">port_range_end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeStartInput">port_range_start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceIpInput">source_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceMacInput">source_mac_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.targetIpInput">target_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpCode">icmp_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpType">icmp_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nsgId">nsg_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeEnd">port_range_end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeStart">port_range_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceIp">source_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceMac">source_mac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.targetIp">target_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.timeouts"></a>

```python
timeouts: NsgFirewallruleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference">NsgFirewallruleTimeoutsOutputReference</a>

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `icmp_code_input`<sup>Optional</sup> <a name="icmp_code_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpCodeInput"></a>

```python
icmp_code_input: str
```

- *Type:* str

---

##### `icmp_type_input`<sup>Optional</sup> <a name="icmp_type_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpTypeInput"></a>

```python
icmp_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nsg_id_input`<sup>Optional</sup> <a name="nsg_id_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nsgIdInput"></a>

```python
nsg_id_input: str
```

- *Type:* str

---

##### `port_range_end_input`<sup>Optional</sup> <a name="port_range_end_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeEndInput"></a>

```python
port_range_end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_range_start_input`<sup>Optional</sup> <a name="port_range_start_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeStartInput"></a>

```python
port_range_start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `source_ip_input`<sup>Optional</sup> <a name="source_ip_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceIpInput"></a>

```python
source_ip_input: str
```

- *Type:* str

---

##### `source_mac_input`<sup>Optional</sup> <a name="source_mac_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceMacInput"></a>

```python
source_mac_input: str
```

- *Type:* str

---

##### `target_ip_input`<sup>Optional</sup> <a name="target_ip_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.targetIpInput"></a>

```python
target_ip_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NsgFirewallruleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `icmp_code`<sup>Required</sup> <a name="icmp_code" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpCode"></a>

```python
icmp_code: str
```

- *Type:* str

---

##### `icmp_type`<sup>Required</sup> <a name="icmp_type" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpType"></a>

```python
icmp_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nsg_id`<sup>Required</sup> <a name="nsg_id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nsgId"></a>

```python
nsg_id: str
```

- *Type:* str

---

##### `port_range_end`<sup>Required</sup> <a name="port_range_end" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeEnd"></a>

```python
port_range_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_range_start`<sup>Required</sup> <a name="port_range_start" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeStart"></a>

```python
port_range_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `source_ip`<sup>Required</sup> <a name="source_ip" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

---

##### `source_mac`<sup>Required</sup> <a name="source_mac" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceMac"></a>

```python
source_mac: str
```

- *Type:* str

---

##### `target_ip`<sup>Required</sup> <a name="target_ip" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.targetIp"></a>

```python
target_ip: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NsgFirewallruleConfig <a name="NsgFirewallruleConfig" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nsg_firewallrule

nsgFirewallrule.NsgFirewallruleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  nsg_id: str,
  protocol: str,
  icmp_code: str = None,
  icmp_type: str = None,
  id: str = None,
  name: str = None,
  port_range_end: typing.Union[int, float] = None,
  port_range_start: typing.Union[int, float] = None,
  source_ip: str = None,
  source_mac: str = None,
  target_ip: str = None,
  timeouts: NsgFirewallruleTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#datacenter_id NsgFirewallrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.nsgId">nsg_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#nsg_id NsgFirewallrule#nsg_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#protocol NsgFirewallrule#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.icmpCode">icmp_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#icmp_code NsgFirewallrule#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.icmpType">icmp_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#icmp_type NsgFirewallrule#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#id NsgFirewallrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#name NsgFirewallrule#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.portRangeEnd">port_range_end</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#port_range_end NsgFirewallrule#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.portRangeStart">port_range_start</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#port_range_start NsgFirewallrule#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.sourceIp">source_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#source_ip NsgFirewallrule#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.sourceMac">source_mac</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#source_mac NsgFirewallrule#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.targetIp">target_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#target_ip NsgFirewallrule#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#type NsgFirewallrule#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#datacenter_id NsgFirewallrule#datacenter_id}.

---

##### `nsg_id`<sup>Required</sup> <a name="nsg_id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.nsgId"></a>

```python
nsg_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#nsg_id NsgFirewallrule#nsg_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#protocol NsgFirewallrule#protocol}.

---

##### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.icmpCode"></a>

```python
icmp_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#icmp_code NsgFirewallrule#icmp_code}.

---

##### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.icmpType"></a>

```python
icmp_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#icmp_type NsgFirewallrule#icmp_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#id NsgFirewallrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#name NsgFirewallrule#name}.

---

##### `port_range_end`<sup>Optional</sup> <a name="port_range_end" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.portRangeEnd"></a>

```python
port_range_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#port_range_end NsgFirewallrule#port_range_end}.

---

##### `port_range_start`<sup>Optional</sup> <a name="port_range_start" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.portRangeStart"></a>

```python
port_range_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#port_range_start NsgFirewallrule#port_range_start}.

---

##### `source_ip`<sup>Optional</sup> <a name="source_ip" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#source_ip NsgFirewallrule#source_ip}.

---

##### `source_mac`<sup>Optional</sup> <a name="source_mac" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.sourceMac"></a>

```python
source_mac: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#source_mac NsgFirewallrule#source_mac}.

---

##### `target_ip`<sup>Optional</sup> <a name="target_ip" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.targetIp"></a>

```python
target_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#target_ip NsgFirewallrule#target_ip}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.timeouts"></a>

```python
timeouts: NsgFirewallruleTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#timeouts NsgFirewallrule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#type NsgFirewallrule#type}.

---

### NsgFirewallruleTimeouts <a name="NsgFirewallruleTimeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nsg_firewallrule

nsgFirewallrule.NsgFirewallruleTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#create NsgFirewallrule#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#default NsgFirewallrule#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#delete NsgFirewallrule#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#update NsgFirewallrule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#create NsgFirewallrule#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#default NsgFirewallrule#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#delete NsgFirewallrule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.7/docs/resources/nsg_firewallrule#update NsgFirewallrule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NsgFirewallruleTimeoutsOutputReference <a name="NsgFirewallruleTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import nsg_firewallrule

nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NsgFirewallruleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a>]

---



