# `dataIonoscloudNetworkloadbalancerForwardingrule` Submodule <a name="`dataIonoscloudNetworkloadbalancerForwardingrule` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudNetworkloadbalancerForwardingrule <a name="DataIonoscloudNetworkloadbalancerForwardingrule" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule ionoscloud_networkloadbalancer_forwardingrule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_networkloadbalancer_forwardingrule

dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule(
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
  networkloadbalancer_id: str,
  id: str = None,
  name: str = None,
  timeouts: DataIonoscloudNetworkloadbalancerForwardingruleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#datacenter_id DataIonoscloudNetworkloadbalancerForwardingrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.networkloadbalancerId">networkloadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#networkloadbalancer_id DataIonoscloudNetworkloadbalancerForwardingrule#networkloadbalancer_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#id DataIonoscloudNetworkloadbalancerForwardingrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#name DataIonoscloudNetworkloadbalancerForwardingrule#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts">DataIonoscloudNetworkloadbalancerForwardingruleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.datacenterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#datacenter_id DataIonoscloudNetworkloadbalancerForwardingrule#datacenter_id}.

---

##### `networkloadbalancer_id`<sup>Required</sup> <a name="networkloadbalancer_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.networkloadbalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#networkloadbalancer_id DataIonoscloudNetworkloadbalancerForwardingrule#networkloadbalancer_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#id DataIonoscloudNetworkloadbalancerForwardingrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#name DataIonoscloudNetworkloadbalancerForwardingrule#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts">DataIonoscloudNetworkloadbalancerForwardingruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#timeouts DataIonoscloudNetworkloadbalancerForwardingrule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#create DataIonoscloudNetworkloadbalancerForwardingrule#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#default DataIonoscloudNetworkloadbalancerForwardingrule#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#delete DataIonoscloudNetworkloadbalancerForwardingrule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#update DataIonoscloudNetworkloadbalancerForwardingrule#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataIonoscloudNetworkloadbalancerForwardingrule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_networkloadbalancer_forwardingrule

dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_networkloadbalancer_forwardingrule

dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_networkloadbalancer_forwardingrule

dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_networkloadbalancer_forwardingrule

dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataIonoscloudNetworkloadbalancerForwardingrule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataIonoscloudNetworkloadbalancerForwardingrule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataIonoscloudNetworkloadbalancerForwardingrule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudNetworkloadbalancerForwardingrule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList">DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.listenerIp">listener_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList">DataIonoscloudNetworkloadbalancerForwardingruleTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference">DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.networkloadbalancerIdInput">networkloadbalancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts">DataIonoscloudNetworkloadbalancerForwardingruleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.networkloadbalancerId">networkloadbalancer_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.healthCheck"></a>

```python
health_check: DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList">DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList</a>

---

##### `listener_ip`<sup>Required</sup> <a name="listener_ip" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.listenerIp"></a>

```python
listener_ip: str
```

- *Type:* str

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.targets"></a>

```python
targets: DataIonoscloudNetworkloadbalancerForwardingruleTargetsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList">DataIonoscloudNetworkloadbalancerForwardingruleTargetsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.timeouts"></a>

```python
timeouts: DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference">DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference</a>

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networkloadbalancer_id_input`<sup>Optional</sup> <a name="networkloadbalancer_id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.networkloadbalancerIdInput"></a>

```python
networkloadbalancer_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataIonoscloudNetworkloadbalancerForwardingruleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts">DataIonoscloudNetworkloadbalancerForwardingruleTimeouts</a>]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `networkloadbalancer_id`<sup>Required</sup> <a name="networkloadbalancer_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.networkloadbalancerId"></a>

```python
networkloadbalancer_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingrule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudNetworkloadbalancerForwardingruleConfig <a name="DataIonoscloudNetworkloadbalancerForwardingruleConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_networkloadbalancer_forwardingrule

dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  networkloadbalancer_id: str,
  id: str = None,
  name: str = None,
  timeouts: DataIonoscloudNetworkloadbalancerForwardingruleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#datacenter_id DataIonoscloudNetworkloadbalancerForwardingrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.networkloadbalancerId">networkloadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#networkloadbalancer_id DataIonoscloudNetworkloadbalancerForwardingrule#networkloadbalancer_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#id DataIonoscloudNetworkloadbalancerForwardingrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#name DataIonoscloudNetworkloadbalancerForwardingrule#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts">DataIonoscloudNetworkloadbalancerForwardingruleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#datacenter_id DataIonoscloudNetworkloadbalancerForwardingrule#datacenter_id}.

---

##### `networkloadbalancer_id`<sup>Required</sup> <a name="networkloadbalancer_id" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.networkloadbalancerId"></a>

```python
networkloadbalancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#networkloadbalancer_id DataIonoscloudNetworkloadbalancerForwardingrule#networkloadbalancer_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#id DataIonoscloudNetworkloadbalancerForwardingrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#name DataIonoscloudNetworkloadbalancerForwardingrule#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleConfig.property.timeouts"></a>

```python
timeouts: DataIonoscloudNetworkloadbalancerForwardingruleTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts">DataIonoscloudNetworkloadbalancerForwardingruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#timeouts DataIonoscloudNetworkloadbalancerForwardingrule#timeouts}

---

### DataIonoscloudNetworkloadbalancerForwardingruleHealthCheck <a name="DataIonoscloudNetworkloadbalancerForwardingruleHealthCheck" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_networkloadbalancer_forwardingrule

dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheck()
```


### DataIonoscloudNetworkloadbalancerForwardingruleTargets <a name="DataIonoscloudNetworkloadbalancerForwardingruleTargets" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_networkloadbalancer_forwardingrule

dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargets()
```


### DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheck <a name="DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheck" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_networkloadbalancer_forwardingrule

dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheck()
```


### DataIonoscloudNetworkloadbalancerForwardingruleTimeouts <a name="DataIonoscloudNetworkloadbalancerForwardingruleTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_networkloadbalancer_forwardingrule

dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#create DataIonoscloudNetworkloadbalancerForwardingrule#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#default DataIonoscloudNetworkloadbalancerForwardingrule#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#delete DataIonoscloudNetworkloadbalancerForwardingrule#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#update DataIonoscloudNetworkloadbalancerForwardingrule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#create DataIonoscloudNetworkloadbalancerForwardingrule#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#default DataIonoscloudNetworkloadbalancerForwardingrule#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#delete DataIonoscloudNetworkloadbalancerForwardingrule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.14/docs/data-sources/networkloadbalancer_forwardingrule#update DataIonoscloudNetworkloadbalancerForwardingrule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList <a name="DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_networkloadbalancer_forwardingrule

dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference <a name="DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_networkloadbalancer_forwardingrule

dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.property.clientTimeout">client_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.property.targetTimeout">target_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheck">DataIonoscloudNetworkloadbalancerForwardingruleHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_timeout`<sup>Required</sup> <a name="client_timeout" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.property.clientTimeout"></a>

```python
client_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connect_timeout`<sup>Required</sup> <a name="connect_timeout" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_timeout`<sup>Required</sup> <a name="target_timeout" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.property.targetTimeout"></a>

```python
target_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: DataIonoscloudNetworkloadbalancerForwardingruleHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleHealthCheck">DataIonoscloudNetworkloadbalancerForwardingruleHealthCheck</a>

---


### DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList <a name="DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_networkloadbalancer_forwardingrule

dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference <a name="DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_networkloadbalancer_forwardingrule

dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.check">check</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkInterval">check_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.maintenance">maintenance</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheck">DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.check"></a>

```python
check: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `check_interval`<sup>Required</sup> <a name="check_interval" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkInterval"></a>

```python
check_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.maintenance"></a>

```python
maintenance: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheck">DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheck</a>

---


### DataIonoscloudNetworkloadbalancerForwardingruleTargetsList <a name="DataIonoscloudNetworkloadbalancerForwardingruleTargetsList" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_networkloadbalancer_forwardingrule

dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference <a name="DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_networkloadbalancer_forwardingrule

dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList">DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.property.proxyProtocol">proxy_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargets">DataIonoscloudNetworkloadbalancerForwardingruleTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.property.healthCheck"></a>

```python
health_check: DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList">DataIonoscloudNetworkloadbalancerForwardingruleTargetsHealthCheckList</a>

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_protocol`<sup>Required</sup> <a name="proxy_protocol" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.property.proxyProtocol"></a>

```python
proxy_protocol: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataIonoscloudNetworkloadbalancerForwardingruleTargets
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTargets">DataIonoscloudNetworkloadbalancerForwardingruleTargets</a>

---


### DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference <a name="DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_networkloadbalancer_forwardingrule

dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts">DataIonoscloudNetworkloadbalancerForwardingruleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataIonoscloudNetworkloadbalancerForwardingruleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNetworkloadbalancerForwardingrule.DataIonoscloudNetworkloadbalancerForwardingruleTimeouts">DataIonoscloudNetworkloadbalancerForwardingruleTimeouts</a>]

---



