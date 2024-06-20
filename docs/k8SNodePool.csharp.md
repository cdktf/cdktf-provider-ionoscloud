# `k8SNodePool` Submodule <a name="`k8SNodePool` Submodule" id="@cdktf/provider-ionoscloud.k8SNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### K8SNodePool <a name="K8SNodePool" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool ionoscloud_k8s_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new K8SNodePool(Construct Scope, string Id, K8SNodePoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig">K8SNodePoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig">K8SNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putAutoScaling">PutAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putLans">PutLans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetAllowReplace">ResetAllowReplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetAutoScaling">ResetAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetLans">ResetLans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetPublicIps">ResetPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoScaling` <a name="PutAutoScaling" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putAutoScaling"></a>

```csharp
private void PutAutoScaling(K8SNodePoolAutoScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling">K8SNodePoolAutoScaling</a>

---

##### `PutLans` <a name="PutLans" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putLans"></a>

```csharp
private void PutLans(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putLans.parameter.value"></a>

- *Type:* object

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(K8SNodePoolMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow">K8SNodePoolMaintenanceWindow</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putTimeouts"></a>

```csharp
private void PutTimeouts(K8SNodePoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts">K8SNodePoolTimeouts</a>

---

##### `ResetAllowReplace` <a name="ResetAllowReplace" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetAllowReplace"></a>

```csharp
private void ResetAllowReplace()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetAutoScaling` <a name="ResetAutoScaling" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetAutoScaling"></a>

```csharp
private void ResetAutoScaling()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLans` <a name="ResetLans" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetLans"></a>

```csharp
private void ResetLans()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetPublicIps` <a name="ResetPublicIps" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetPublicIps"></a>

```csharp
private void ResetPublicIps()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a K8SNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

K8SNodePool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

K8SNodePool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

K8SNodePool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

K8SNodePool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a K8SNodePool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the K8SNodePool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing K8SNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the K8SNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.autoScaling">AutoScaling</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference">K8SNodePoolAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.lans">Lans</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList">K8SNodePoolLansList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference">K8SNodePoolMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference">K8SNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.allowReplaceInput">AllowReplaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.autoScalingInput">AutoScalingInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling">K8SNodePoolAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.coresCountInput">CoresCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.cpuFamilyInput">CpuFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.k8SClusterIdInput">K8SClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.k8SVersionInput">K8SVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.lansInput">LansInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow">K8SNodePoolMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.publicIpsInput">PublicIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.ramSizeInput">RamSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.storageSizeInput">StorageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.allowReplace">AllowReplace</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.coresCount">CoresCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.cpuFamily">CpuFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.datacenterId">DatacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.k8SClusterId">K8SClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.k8SVersion">K8SVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.publicIps">PublicIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.ramSize">RamSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.storageSize">StorageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoScaling`<sup>Required</sup> <a name="AutoScaling" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.autoScaling"></a>

```csharp
public K8SNodePoolAutoScalingOutputReference AutoScaling { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference">K8SNodePoolAutoScalingOutputReference</a>

---

##### `Lans`<sup>Required</sup> <a name="Lans" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.lans"></a>

```csharp
public K8SNodePoolLansList Lans { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList">K8SNodePoolLansList</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.maintenanceWindow"></a>

```csharp
public K8SNodePoolMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference">K8SNodePoolMaintenanceWindowOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.timeouts"></a>

```csharp
public K8SNodePoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference">K8SNodePoolTimeoutsOutputReference</a>

---

##### `AllowReplaceInput`<sup>Optional</sup> <a name="AllowReplaceInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.allowReplaceInput"></a>

```csharp
public object AllowReplaceInput { get; }
```

- *Type:* object

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AutoScalingInput`<sup>Optional</sup> <a name="AutoScalingInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.autoScalingInput"></a>

```csharp
public K8SNodePoolAutoScaling AutoScalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling">K8SNodePoolAutoScaling</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `CoresCountInput`<sup>Optional</sup> <a name="CoresCountInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.coresCountInput"></a>

```csharp
public double CoresCountInput { get; }
```

- *Type:* double

---

##### `CpuFamilyInput`<sup>Optional</sup> <a name="CpuFamilyInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.cpuFamilyInput"></a>

```csharp
public string CpuFamilyInput { get; }
```

- *Type:* string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.datacenterIdInput"></a>

```csharp
public string DatacenterIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `K8SClusterIdInput`<sup>Optional</sup> <a name="K8SClusterIdInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.k8SClusterIdInput"></a>

```csharp
public string K8SClusterIdInput { get; }
```

- *Type:* string

---

##### `K8SVersionInput`<sup>Optional</sup> <a name="K8SVersionInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.k8SVersionInput"></a>

```csharp
public string K8SVersionInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LansInput`<sup>Optional</sup> <a name="LansInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.lansInput"></a>

```csharp
public object LansInput { get; }
```

- *Type:* object

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.maintenanceWindowInput"></a>

```csharp
public K8SNodePoolMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow">K8SNodePoolMaintenanceWindow</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `PublicIpsInput`<sup>Optional</sup> <a name="PublicIpsInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.publicIpsInput"></a>

```csharp
public string[] PublicIpsInput { get; }
```

- *Type:* string[]

---

##### `RamSizeInput`<sup>Optional</sup> <a name="RamSizeInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.ramSizeInput"></a>

```csharp
public double RamSizeInput { get; }
```

- *Type:* double

---

##### `StorageSizeInput`<sup>Optional</sup> <a name="StorageSizeInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.storageSizeInput"></a>

```csharp
public double StorageSizeInput { get; }
```

- *Type:* double

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AllowReplace`<sup>Required</sup> <a name="AllowReplace" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.allowReplace"></a>

```csharp
public object AllowReplace { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `CoresCount`<sup>Required</sup> <a name="CoresCount" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.coresCount"></a>

```csharp
public double CoresCount { get; }
```

- *Type:* double

---

##### `CpuFamily`<sup>Required</sup> <a name="CpuFamily" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.cpuFamily"></a>

```csharp
public string CpuFamily { get; }
```

- *Type:* string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.datacenterId"></a>

```csharp
public string DatacenterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `K8SClusterId`<sup>Required</sup> <a name="K8SClusterId" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.k8SClusterId"></a>

```csharp
public string K8SClusterId { get; }
```

- *Type:* string

---

##### `K8SVersion`<sup>Required</sup> <a name="K8SVersion" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.k8SVersion"></a>

```csharp
public string K8SVersion { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `PublicIps`<sup>Required</sup> <a name="PublicIps" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.publicIps"></a>

```csharp
public string[] PublicIps { get; }
```

- *Type:* string[]

---

##### `RamSize`<sup>Required</sup> <a name="RamSize" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.ramSize"></a>

```csharp
public double RamSize { get; }
```

- *Type:* double

---

##### `StorageSize`<sup>Required</sup> <a name="StorageSize" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.storageSize"></a>

```csharp
public double StorageSize { get; }
```

- *Type:* double

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### K8SNodePoolAutoScaling <a name="K8SNodePoolAutoScaling" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new K8SNodePoolAutoScaling {
    double MaxNodeCount,
    double MinNodeCount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | The maximum number of worker nodes that the node pool can scale to. Should be greater than min_node_count. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | The minimum number of worker nodes the node pool can scale down to. Should be less than max_node_count. |

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; set; }
```

- *Type:* double

The maximum number of worker nodes that the node pool can scale to. Should be greater than min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#max_node_count K8SNodePool#max_node_count}

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; set; }
```

- *Type:* double

The minimum number of worker nodes the node pool can scale down to. Should be less than max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#min_node_count K8SNodePool#min_node_count}

---

### K8SNodePoolConfig <a name="K8SNodePoolConfig" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new K8SNodePoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityZone,
    double CoresCount,
    string CpuFamily,
    string DatacenterId,
    string K8SClusterId,
    string K8SVersion,
    string Name,
    double NodeCount,
    double RamSize,
    double StorageSize,
    string StorageType,
    object AllowReplace = null,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    K8SNodePoolAutoScaling AutoScaling = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    object Lans = null,
    K8SNodePoolMaintenanceWindow MaintenanceWindow = null,
    string[] PublicIps = null,
    K8SNodePoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | The compute availability zone in which the nodes should exist. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.coresCount">CoresCount</a></code> | <code>double</code> | CPU cores count. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.cpuFamily">CpuFamily</a></code> | <code>string</code> | CPU Family. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.datacenterId">DatacenterId</a></code> | <code>string</code> | The UUID of the VDC. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.k8SClusterId">K8SClusterId</a></code> | <code>string</code> | The UUID of an existing kubernetes cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.k8SVersion">K8SVersion</a></code> | <code>string</code> | The desired Kubernetes Version. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.name">Name</a></code> | <code>string</code> | The desired name for the node pool. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.nodeCount">NodeCount</a></code> | <code>double</code> | The number of nodes in this node pool. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.ramSize">RamSize</a></code> | <code>double</code> | The amount of RAM in MB. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.storageSize">StorageSize</a></code> | <code>double</code> | The total allocated storage capacity of a node in GB. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.storageType">StorageType</a></code> | <code>string</code> | Storage type to use. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.allowReplace">AllowReplace</a></code> | <code>object</code> | When set to true, allows the update of immutable fields by destroying and re-creating the node pool. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#annotations K8SNodePool#annotations}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.autoScaling">AutoScaling</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling">K8SNodePoolAutoScaling</a></code> | auto_scaling block. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#id K8SNodePool#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#labels K8SNodePool#labels}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.lans">Lans</a></code> | <code>object</code> | lans block. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow">K8SNodePoolMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.publicIps">PublicIps</a></code> | <code>string[]</code> | A list of fixed IPs. Cannot be set on private clusters. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts">K8SNodePoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

The compute availability zone in which the nodes should exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#availability_zone K8SNodePool#availability_zone}

---

##### `CoresCount`<sup>Required</sup> <a name="CoresCount" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.coresCount"></a>

```csharp
public double CoresCount { get; set; }
```

- *Type:* double

CPU cores count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#cores_count K8SNodePool#cores_count}

---

##### `CpuFamily`<sup>Required</sup> <a name="CpuFamily" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.cpuFamily"></a>

```csharp
public string CpuFamily { get; set; }
```

- *Type:* string

CPU Family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#cpu_family K8SNodePool#cpu_family}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.datacenterId"></a>

```csharp
public string DatacenterId { get; set; }
```

- *Type:* string

The UUID of the VDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#datacenter_id K8SNodePool#datacenter_id}

---

##### `K8SClusterId`<sup>Required</sup> <a name="K8SClusterId" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.k8SClusterId"></a>

```csharp
public string K8SClusterId { get; set; }
```

- *Type:* string

The UUID of an existing kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#k8s_cluster_id K8SNodePool#k8s_cluster_id}

---

##### `K8SVersion`<sup>Required</sup> <a name="K8SVersion" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.k8SVersion"></a>

```csharp
public string K8SVersion { get; set; }
```

- *Type:* string

The desired Kubernetes Version.

For supported values, please check the API documentation. Downgrades are not supported. The provider will ignore downgrades of patch level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#k8s_version K8SNodePool#k8s_version}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The desired name for the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#name K8SNodePool#name}

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

The number of nodes in this node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#node_count K8SNodePool#node_count}

---

##### `RamSize`<sup>Required</sup> <a name="RamSize" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.ramSize"></a>

```csharp
public double RamSize { get; set; }
```

- *Type:* double

The amount of RAM in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#ram_size K8SNodePool#ram_size}

---

##### `StorageSize`<sup>Required</sup> <a name="StorageSize" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.storageSize"></a>

```csharp
public double StorageSize { get; set; }
```

- *Type:* double

The total allocated storage capacity of a node in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#storage_size K8SNodePool#storage_size}

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

Storage type to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#storage_type K8SNodePool#storage_type}

---

##### `AllowReplace`<sup>Optional</sup> <a name="AllowReplace" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.allowReplace"></a>

```csharp
public object AllowReplace { get; set; }
```

- *Type:* object

When set to true, allows the update of immutable fields by destroying and re-creating the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#allow_replace K8SNodePool#allow_replace}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#annotations K8SNodePool#annotations}.

---

##### `AutoScaling`<sup>Optional</sup> <a name="AutoScaling" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.autoScaling"></a>

```csharp
public K8SNodePoolAutoScaling AutoScaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling">K8SNodePoolAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#auto_scaling K8SNodePool#auto_scaling}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#id K8SNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#labels K8SNodePool#labels}.

---

##### `Lans`<sup>Optional</sup> <a name="Lans" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.lans"></a>

```csharp
public object Lans { get; set; }
```

- *Type:* object

lans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#lans K8SNodePool#lans}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.maintenanceWindow"></a>

```csharp
public K8SNodePoolMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow">K8SNodePoolMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#maintenance_window K8SNodePool#maintenance_window}

---

##### `PublicIps`<sup>Optional</sup> <a name="PublicIps" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.publicIps"></a>

```csharp
public string[] PublicIps { get; set; }
```

- *Type:* string[]

A list of fixed IPs. Cannot be set on private clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#public_ips K8SNodePool#public_ips}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.timeouts"></a>

```csharp
public K8SNodePoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts">K8SNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#timeouts K8SNodePool#timeouts}

---

### K8SNodePoolLans <a name="K8SNodePoolLans" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new K8SNodePoolLans {
    double Id,
    object Dhcp = null,
    object Routes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans.property.id">Id</a></code> | <code>double</code> | The LAN ID of an existing LAN at the related datacenter. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans.property.dhcp">Dhcp</a></code> | <code>object</code> | Indicates if the Kubernetes Node Pool LAN will reserve an IP using DHCP. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans.property.routes">Routes</a></code> | <code>object</code> | routes block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans.property.id"></a>

```csharp
public double Id { get; set; }
```

- *Type:* double

The LAN ID of an existing LAN at the related datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#id K8SNodePool#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Dhcp`<sup>Optional</sup> <a name="Dhcp" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans.property.dhcp"></a>

```csharp
public object Dhcp { get; set; }
```

- *Type:* object

Indicates if the Kubernetes Node Pool LAN will reserve an IP using DHCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#dhcp K8SNodePool#dhcp}

---

##### `Routes`<sup>Optional</sup> <a name="Routes" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans.property.routes"></a>

```csharp
public object Routes { get; set; }
```

- *Type:* object

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#routes K8SNodePool#routes}

---

### K8SNodePoolLansRoutes <a name="K8SNodePoolLansRoutes" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new K8SNodePoolLansRoutes {
    string GatewayIp,
    string Network
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes.property.gatewayIp">GatewayIp</a></code> | <code>string</code> | IPv4 or IPv6 Gateway IP for the route. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes.property.network">Network</a></code> | <code>string</code> | IPv4 or IPv6 CIDR to be routed via the interface. |

---

##### `GatewayIp`<sup>Required</sup> <a name="GatewayIp" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes.property.gatewayIp"></a>

```csharp
public string GatewayIp { get; set; }
```

- *Type:* string

IPv4 or IPv6 Gateway IP for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#gateway_ip K8SNodePool#gateway_ip}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

IPv4 or IPv6 CIDR to be routed via the interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#network K8SNodePool#network}

---

### K8SNodePoolMaintenanceWindow <a name="K8SNodePoolMaintenanceWindow" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new K8SNodePoolMaintenanceWindow {
    string DayOfTheWeek,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow.property.dayOfTheWeek">DayOfTheWeek</a></code> | <code>string</code> | Day of the week when maintenance is allowed. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow.property.time">Time</a></code> | <code>string</code> | A clock time in the day when maintenance is allowed. |

---

##### `DayOfTheWeek`<sup>Required</sup> <a name="DayOfTheWeek" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow.property.dayOfTheWeek"></a>

```csharp
public string DayOfTheWeek { get; set; }
```

- *Type:* string

Day of the week when maintenance is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#day_of_the_week K8SNodePool#day_of_the_week}

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

A clock time in the day when maintenance is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#time K8SNodePool#time}

---

### K8SNodePoolTimeouts <a name="K8SNodePoolTimeouts" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new K8SNodePoolTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#create K8SNodePool#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#default K8SNodePool#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#delete K8SNodePool#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#update K8SNodePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#create K8SNodePool#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#default K8SNodePool#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#delete K8SNodePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.18/docs/resources/k8s_node_pool#update K8SNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### K8SNodePoolAutoScalingOutputReference <a name="K8SNodePoolAutoScalingOutputReference" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new K8SNodePoolAutoScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling">K8SNodePoolAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.maxNodeCountInput"></a>

```csharp
public double MaxNodeCountInput { get; }
```

- *Type:* double

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.minNodeCountInput"></a>

```csharp
public double MinNodeCountInput { get; }
```

- *Type:* double

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; }
```

- *Type:* double

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.internalValue"></a>

```csharp
public K8SNodePoolAutoScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling">K8SNodePoolAutoScaling</a>

---


### K8SNodePoolLansList <a name="K8SNodePoolLansList" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new K8SNodePoolLansList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.get"></a>

```csharp
private K8SNodePoolLansOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### K8SNodePoolLansOutputReference <a name="K8SNodePoolLansOutputReference" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new K8SNodePoolLansOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.putRoutes">PutRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.resetDhcp">ResetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.resetRoutes">ResetRoutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRoutes` <a name="PutRoutes" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.putRoutes"></a>

```csharp
private void PutRoutes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.putRoutes.parameter.value"></a>

- *Type:* object

---

##### `ResetDhcp` <a name="ResetDhcp" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.resetDhcp"></a>

```csharp
private void ResetDhcp()
```

##### `ResetRoutes` <a name="ResetRoutes" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.resetRoutes"></a>

```csharp
private void ResetRoutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.routes">Routes</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList">K8SNodePoolLansRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.dhcpInput">DhcpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.idInput">IdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.routesInput">RoutesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.dhcp">Dhcp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Routes`<sup>Required</sup> <a name="Routes" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.routes"></a>

```csharp
public K8SNodePoolLansRoutesList Routes { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList">K8SNodePoolLansRoutesList</a>

---

##### `DhcpInput`<sup>Optional</sup> <a name="DhcpInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.dhcpInput"></a>

```csharp
public object DhcpInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.idInput"></a>

```csharp
public double IdInput { get; }
```

- *Type:* double

---

##### `RoutesInput`<sup>Optional</sup> <a name="RoutesInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.routesInput"></a>

```csharp
public object RoutesInput { get; }
```

- *Type:* object

---

##### `Dhcp`<sup>Required</sup> <a name="Dhcp" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.dhcp"></a>

```csharp
public object Dhcp { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### K8SNodePoolLansRoutesList <a name="K8SNodePoolLansRoutesList" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new K8SNodePoolLansRoutesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.get"></a>

```csharp
private K8SNodePoolLansRoutesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### K8SNodePoolLansRoutesOutputReference <a name="K8SNodePoolLansRoutesOutputReference" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new K8SNodePoolLansRoutesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.gatewayIpInput">GatewayIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.gatewayIp">GatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GatewayIpInput`<sup>Optional</sup> <a name="GatewayIpInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.gatewayIpInput"></a>

```csharp
public string GatewayIpInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `GatewayIp`<sup>Required</sup> <a name="GatewayIp" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.gatewayIp"></a>

```csharp
public string GatewayIp { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### K8SNodePoolMaintenanceWindowOutputReference <a name="K8SNodePoolMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new K8SNodePoolMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeekInput">DayOfTheWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeek">DayOfTheWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow">K8SNodePoolMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfTheWeekInput`<sup>Optional</sup> <a name="DayOfTheWeekInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```csharp
public string DayOfTheWeekInput { get; }
```

- *Type:* string

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `DayOfTheWeek`<sup>Required</sup> <a name="DayOfTheWeek" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```csharp
public string DayOfTheWeek { get; }
```

- *Type:* string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public K8SNodePoolMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow">K8SNodePoolMaintenanceWindow</a>

---


### K8SNodePoolTimeoutsOutputReference <a name="K8SNodePoolTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new K8SNodePoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



