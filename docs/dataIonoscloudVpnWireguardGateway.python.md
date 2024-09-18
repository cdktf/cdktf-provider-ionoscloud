# `dataIonoscloudVpnWireguardGateway` Submodule <a name="`dataIonoscloudVpnWireguardGateway` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudVpnWireguardGateway <a name="DataIonoscloudVpnWireguardGateway" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/vpn_wireguard_gateway ionoscloud_vpn_wireguard_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_vpn_wireguard_gateway

dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  description: str = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the WireGuard Gateway. Supported locations: de/fra, de/txl. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/vpn_wireguard_gateway#description DataIonoscloudVpnWireguardGateway#description}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The ID of the WireGuard Gateway. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/vpn_wireguard_gateway#name DataIonoscloudVpnWireguardGateway#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.location"></a>

- *Type:* str

The location of the WireGuard Gateway. Supported locations: de/fra, de/txl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/vpn_wireguard_gateway#location DataIonoscloudVpnWireguardGateway#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/vpn_wireguard_gateway#description DataIonoscloudVpnWireguardGateway#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.id"></a>

- *Type:* str

The ID of the WireGuard Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/vpn_wireguard_gateway#id DataIonoscloudVpnWireguardGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/vpn_wireguard_gateway#name DataIonoscloudVpnWireguardGateway#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataIonoscloudVpnWireguardGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_vpn_wireguard_gateway

dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_vpn_wireguard_gateway

dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_vpn_wireguard_gateway

dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_vpn_wireguard_gateway

dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataIonoscloudVpnWireguardGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataIonoscloudVpnWireguardGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataIonoscloudVpnWireguardGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/vpn_wireguard_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudVpnWireguardGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList">DataIonoscloudVpnWireguardGatewayConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.gatewayIp">gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.interfaceIpv4Cidr">interface_ipv4_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.interfaceIpv6Cidr">interface_ipv6_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.listenPort">listen_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.connections"></a>

```python
connections: DataIonoscloudVpnWireguardGatewayConnectionsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList">DataIonoscloudVpnWireguardGatewayConnectionsList</a>

---

##### `gateway_ip`<sup>Required</sup> <a name="gateway_ip" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.gatewayIp"></a>

```python
gateway_ip: str
```

- *Type:* str

---

##### `interface_ipv4_cidr`<sup>Required</sup> <a name="interface_ipv4_cidr" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.interfaceIpv4Cidr"></a>

```python
interface_ipv4_cidr: str
```

- *Type:* str

---

##### `interface_ipv6_cidr`<sup>Required</sup> <a name="interface_ipv6_cidr" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.interfaceIpv6Cidr"></a>

```python
interface_ipv6_cidr: str
```

- *Type:* str

---

##### `listen_port`<sup>Required</sup> <a name="listen_port" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.listenPort"></a>

```python
listen_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudVpnWireguardGatewayConfig <a name="DataIonoscloudVpnWireguardGatewayConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_vpn_wireguard_gateway

dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  description: str = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.location">location</a></code> | <code>str</code> | The location of the WireGuard Gateway. Supported locations: de/fra, de/txl. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/vpn_wireguard_gateway#description DataIonoscloudVpnWireguardGateway#description}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.id">id</a></code> | <code>str</code> | The ID of the WireGuard Gateway. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/vpn_wireguard_gateway#name DataIonoscloudVpnWireguardGateway#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the WireGuard Gateway. Supported locations: de/fra, de/txl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/vpn_wireguard_gateway#location DataIonoscloudVpnWireguardGateway#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/vpn_wireguard_gateway#description DataIonoscloudVpnWireguardGateway#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the WireGuard Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/vpn_wireguard_gateway#id DataIonoscloudVpnWireguardGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/vpn_wireguard_gateway#name DataIonoscloudVpnWireguardGateway#name}.

---

### DataIonoscloudVpnWireguardGatewayConnections <a name="DataIonoscloudVpnWireguardGatewayConnections" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_vpn_wireguard_gateway

dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnections()
```


## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudVpnWireguardGatewayConnectionsList <a name="DataIonoscloudVpnWireguardGatewayConnectionsList" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_vpn_wireguard_gateway

dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataIonoscloudVpnWireguardGatewayConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataIonoscloudVpnWireguardGatewayConnectionsOutputReference <a name="DataIonoscloudVpnWireguardGatewayConnectionsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import data_ionoscloud_vpn_wireguard_gateway

dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.property.ipv4Cidr">ipv4_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.property.ipv6Cidr">ipv6_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.property.lanId">lan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnections">DataIonoscloudVpnWireguardGatewayConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `ipv4_cidr`<sup>Required</sup> <a name="ipv4_cidr" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.property.ipv4Cidr"></a>

```python
ipv4_cidr: str
```

- *Type:* str

---

##### `ipv6_cidr`<sup>Required</sup> <a name="ipv6_cidr" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.property.ipv6Cidr"></a>

```python
ipv6_cidr: str
```

- *Type:* str

---

##### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.property.lanId"></a>

```python
lan_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataIonoscloudVpnWireguardGatewayConnections
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnWireguardGateway.DataIonoscloudVpnWireguardGatewayConnections">DataIonoscloudVpnWireguardGatewayConnections</a>

---



