# `firewall` Submodule <a name="`firewall` Submodule" id="@cdktf/provider-ionoscloud.firewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Firewall <a name="Firewall" id="@cdktf/provider-ionoscloud.firewall.Firewall"></a>

Represents a {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall ionoscloud_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import firewall

firewall.Firewall(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  nic_id: str,
  protocol: str,
  server_id: str,
  icmp_code: str = None,
  icmp_type: str = None,
  id: str = None,
  name: str = None,
  port_range_end: typing.Union[int, float] = None,
  port_range_start: typing.Union[int, float] = None,
  source_ip: str = None,
  source_mac: str = None,
  target_ip: str = None,
  timeouts: FirewallTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#datacenter_id Firewall#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.nicId">nic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#nic_id Firewall#nic_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#protocol Firewall#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#server_id Firewall#server_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.icmpCode">icmp_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#icmp_code Firewall#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.icmpType">icmp_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#icmp_type Firewall#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#id Firewall#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#name Firewall#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.portRangeEnd">port_range_end</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#port_range_end Firewall#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.portRangeStart">port_range_start</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#port_range_start Firewall#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.sourceIp">source_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#source_ip Firewall#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.sourceMac">source_mac</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#source_mac Firewall#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.targetIp">target_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#target_ip Firewall#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeouts">FirewallTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#type Firewall#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.datacenterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#datacenter_id Firewall#datacenter_id}.

---

##### `nic_id`<sup>Required</sup> <a name="nic_id" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.nicId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#nic_id Firewall#nic_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#protocol Firewall#protocol}.

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.serverId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#server_id Firewall#server_id}.

---

##### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.icmpCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#icmp_code Firewall#icmp_code}.

---

##### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.icmpType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#icmp_type Firewall#icmp_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#id Firewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#name Firewall#name}.

---

##### `port_range_end`<sup>Optional</sup> <a name="port_range_end" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.portRangeEnd"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#port_range_end Firewall#port_range_end}.

---

##### `port_range_start`<sup>Optional</sup> <a name="port_range_start" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.portRangeStart"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#port_range_start Firewall#port_range_start}.

---

##### `source_ip`<sup>Optional</sup> <a name="source_ip" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.sourceIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#source_ip Firewall#source_ip}.

---

##### `source_mac`<sup>Optional</sup> <a name="source_mac" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.sourceMac"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#source_mac Firewall#source_mac}.

---

##### `target_ip`<sup>Optional</sup> <a name="target_ip" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.targetIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#target_ip Firewall#target_ip}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeouts">FirewallTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#timeouts Firewall#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.firewall.Firewall.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#type Firewall#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.resetIcmpCode">reset_icmp_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.resetIcmpType">reset_icmp_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.resetPortRangeEnd">reset_port_range_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.resetPortRangeStart">reset_port_range_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.resetSourceIp">reset_source_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.resetSourceMac">reset_source_mac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.resetTargetIp">reset_target_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.firewall.Firewall.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.firewall.Firewall.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.firewall.Firewall.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.firewall.Firewall.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.firewall.Firewall.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.firewall.Firewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.firewall.Firewall.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.firewall.Firewall.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.firewall.Firewall.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.Firewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.firewall.Firewall.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.firewall.Firewall.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#create Firewall#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.firewall.Firewall.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#default Firewall#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.firewall.Firewall.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#delete Firewall#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.firewall.Firewall.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#update Firewall#update}.

---

##### `reset_icmp_code` <a name="reset_icmp_code" id="@cdktf/provider-ionoscloud.firewall.Firewall.resetIcmpCode"></a>

```python
def reset_icmp_code() -> None
```

##### `reset_icmp_type` <a name="reset_icmp_type" id="@cdktf/provider-ionoscloud.firewall.Firewall.resetIcmpType"></a>

```python
def reset_icmp_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.firewall.Firewall.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.firewall.Firewall.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_port_range_end` <a name="reset_port_range_end" id="@cdktf/provider-ionoscloud.firewall.Firewall.resetPortRangeEnd"></a>

```python
def reset_port_range_end() -> None
```

##### `reset_port_range_start` <a name="reset_port_range_start" id="@cdktf/provider-ionoscloud.firewall.Firewall.resetPortRangeStart"></a>

```python
def reset_port_range_start() -> None
```

##### `reset_source_ip` <a name="reset_source_ip" id="@cdktf/provider-ionoscloud.firewall.Firewall.resetSourceIp"></a>

```python
def reset_source_ip() -> None
```

##### `reset_source_mac` <a name="reset_source_mac" id="@cdktf/provider-ionoscloud.firewall.Firewall.resetSourceMac"></a>

```python
def reset_source_mac() -> None
```

##### `reset_target_ip` <a name="reset_target_ip" id="@cdktf/provider-ionoscloud.firewall.Firewall.resetTargetIp"></a>

```python
def reset_target_ip() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.firewall.Firewall.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-ionoscloud.firewall.Firewall.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.firewall.Firewall.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import firewall

firewall.Firewall.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.firewall.Firewall.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.firewall.Firewall.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import firewall

firewall.Firewall.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.firewall.Firewall.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.firewall.Firewall.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import firewall

firewall.Firewall.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.firewall.Firewall.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference">FirewallTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.icmpCodeInput">icmp_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.icmpTypeInput">icmp_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.nicIdInput">nic_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.portRangeEndInput">port_range_end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.portRangeStartInput">port_range_start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.sourceIpInput">source_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.sourceMacInput">source_mac_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.targetIpInput">target_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeouts">FirewallTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.icmpCode">icmp_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.icmpType">icmp_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.nicId">nic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.portRangeEnd">port_range_end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.portRangeStart">port_range_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.sourceIp">source_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.sourceMac">source_mac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.targetIp">target_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.timeouts"></a>

```python
timeouts: FirewallTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference">FirewallTimeoutsOutputReference</a>

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `icmp_code_input`<sup>Optional</sup> <a name="icmp_code_input" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.icmpCodeInput"></a>

```python
icmp_code_input: str
```

- *Type:* str

---

##### `icmp_type_input`<sup>Optional</sup> <a name="icmp_type_input" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.icmpTypeInput"></a>

```python
icmp_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nic_id_input`<sup>Optional</sup> <a name="nic_id_input" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.nicIdInput"></a>

```python
nic_id_input: str
```

- *Type:* str

---

##### `port_range_end_input`<sup>Optional</sup> <a name="port_range_end_input" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.portRangeEndInput"></a>

```python
port_range_end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_range_start_input`<sup>Optional</sup> <a name="port_range_start_input" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.portRangeStartInput"></a>

```python
port_range_start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `source_ip_input`<sup>Optional</sup> <a name="source_ip_input" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.sourceIpInput"></a>

```python
source_ip_input: str
```

- *Type:* str

---

##### `source_mac_input`<sup>Optional</sup> <a name="source_mac_input" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.sourceMacInput"></a>

```python
source_mac_input: str
```

- *Type:* str

---

##### `target_ip_input`<sup>Optional</sup> <a name="target_ip_input" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.targetIpInput"></a>

```python
target_ip_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[FirewallTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeouts">FirewallTimeouts</a>, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `icmp_code`<sup>Required</sup> <a name="icmp_code" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.icmpCode"></a>

```python
icmp_code: str
```

- *Type:* str

---

##### `icmp_type`<sup>Required</sup> <a name="icmp_type" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.icmpType"></a>

```python
icmp_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nic_id`<sup>Required</sup> <a name="nic_id" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.nicId"></a>

```python
nic_id: str
```

- *Type:* str

---

##### `port_range_end`<sup>Required</sup> <a name="port_range_end" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.portRangeEnd"></a>

```python
port_range_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_range_start`<sup>Required</sup> <a name="port_range_start" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.portRangeStart"></a>

```python
port_range_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `source_ip`<sup>Required</sup> <a name="source_ip" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

---

##### `source_mac`<sup>Required</sup> <a name="source_mac" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.sourceMac"></a>

```python
source_mac: str
```

- *Type:* str

---

##### `target_ip`<sup>Required</sup> <a name="target_ip" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.targetIp"></a>

```python
target_ip: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.Firewall.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.firewall.Firewall.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallConfig <a name="FirewallConfig" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import firewall

firewall.FirewallConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  nic_id: str,
  protocol: str,
  server_id: str,
  icmp_code: str = None,
  icmp_type: str = None,
  id: str = None,
  name: str = None,
  port_range_end: typing.Union[int, float] = None,
  port_range_start: typing.Union[int, float] = None,
  source_ip: str = None,
  source_mac: str = None,
  target_ip: str = None,
  timeouts: FirewallTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#datacenter_id Firewall#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.nicId">nic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#nic_id Firewall#nic_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#protocol Firewall#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#server_id Firewall#server_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.icmpCode">icmp_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#icmp_code Firewall#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.icmpType">icmp_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#icmp_type Firewall#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#id Firewall#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#name Firewall#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.portRangeEnd">port_range_end</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#port_range_end Firewall#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.portRangeStart">port_range_start</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#port_range_start Firewall#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.sourceIp">source_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#source_ip Firewall#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.sourceMac">source_mac</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#source_mac Firewall#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.targetIp">target_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#target_ip Firewall#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeouts">FirewallTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#type Firewall#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#datacenter_id Firewall#datacenter_id}.

---

##### `nic_id`<sup>Required</sup> <a name="nic_id" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.nicId"></a>

```python
nic_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#nic_id Firewall#nic_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#protocol Firewall#protocol}.

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#server_id Firewall#server_id}.

---

##### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.icmpCode"></a>

```python
icmp_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#icmp_code Firewall#icmp_code}.

---

##### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.icmpType"></a>

```python
icmp_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#icmp_type Firewall#icmp_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#id Firewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#name Firewall#name}.

---

##### `port_range_end`<sup>Optional</sup> <a name="port_range_end" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.portRangeEnd"></a>

```python
port_range_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#port_range_end Firewall#port_range_end}.

---

##### `port_range_start`<sup>Optional</sup> <a name="port_range_start" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.portRangeStart"></a>

```python
port_range_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#port_range_start Firewall#port_range_start}.

---

##### `source_ip`<sup>Optional</sup> <a name="source_ip" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#source_ip Firewall#source_ip}.

---

##### `source_mac`<sup>Optional</sup> <a name="source_mac" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.sourceMac"></a>

```python
source_mac: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#source_mac Firewall#source_mac}.

---

##### `target_ip`<sup>Optional</sup> <a name="target_ip" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.targetIp"></a>

```python
target_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#target_ip Firewall#target_ip}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.timeouts"></a>

```python
timeouts: FirewallTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeouts">FirewallTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#timeouts Firewall#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.firewall.FirewallConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#type Firewall#type}.

---

### FirewallTimeouts <a name="FirewallTimeouts" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import firewall

firewall.FirewallTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#create Firewall#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#default Firewall#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#delete Firewall#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#update Firewall#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#create Firewall#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#default Firewall#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#delete Firewall#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/firewall#update Firewall#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallTimeoutsOutputReference <a name="FirewallTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import firewall

firewall.FirewallTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeouts">FirewallTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.firewall.FirewallTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FirewallTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-ionoscloud.firewall.FirewallTimeouts">FirewallTimeouts</a>, cdktf.IResolvable]

---



